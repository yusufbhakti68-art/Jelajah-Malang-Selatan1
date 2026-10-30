import asyncio
import sys
import urllib.parse
import json
import os
import re
from datetime import datetime
from playwright.async_api import async_playwright

if sys.platform == "win32":
    asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())

def cleanup_filename(text):
    """Membersihkan karakter ilegal agar aman digunakan sebagai nama file"""
    return re.sub(r'[\\/*?:"<>|]', "", text).replace(" ", "_").lower()

async def main():
    # 1. Parameter Pencarian (Silakan sesuaikan kategori & lokasi)
    kategori_input = "Pantai"
    lokasi = "Kab Malang"
    max_results = 40  
    scroll_depth = 30
    
    query = f"{kategori_input} di {lokasi}"
    encoded_query = urllib.parse.quote(query)
    url = f"https://www.google.com/maps/search/{encoded_query}"
    
    user_agent_asli = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=['--disable-blink-features=AutomationControlled'])
        context = await browser.new_context(user_agent=user_agent_asli, viewport={"width": 1280, "height": 720})
        page = await context.new_page()
        
        try:
            await page.goto(url, wait_until="domcontentloaded", timeout=30000)
            await page.wait_for_selector('div[role="feed"]', timeout=15000)
            await asyncio.sleep(2)

            panel_kiri = page.locator('div[role="feed"]')

            for i in range(scroll_depth):
                await panel_kiri.evaluate("el => el.scrollTo(0, el.scrollHeight)")
                await asyncio.sleep(1.5)

            kartu_tempat = page.locator("a[href*='/maps/place/']")
            jumlah_terdeteksi = await kartu_tempat.count()

            link_unik = []
            for i in range(jumlah_terdeteksi):
                link = await kartu_tempat.nth(i).get_attribute("href")
                if link and link not in link_unik:
                    link_unik.append(link)

            daftar_data = []
            target_ambil = min(len(link_unik), max_results)

            for i in range(target_ambil):
                try:
                    url_tempat = link_unik[i]
                    await page.goto(url_tempat, wait_until="domcontentloaded", timeout=15000)
                    await asyncio.sleep(0.8)

                    # 1. Nama Restoran
                    try:
                        nama = await page.locator("h1.DUwDvf").inner_text(timeout=3000)
                    except:
                        nama = "Tidak ada nama"

                    # 2. Nomor WhatsApp
                    try:
                        telepon = await page.locator('button[data-item-id^="phone:tel:"]').inner_text(timeout=2000)
                        wa = re.sub(r'\D', '', telepon)
                        if wa.startswith("0"):
                            wa = "62" + wa[1:]
                    except:
                        wa = "-"

                    # 3. URL Foto
                    try:
                        foto_element = page.locator('div.ZKCDEc img, div.Appis1 img').first
                        foto_url = await foto_element.get_attribute("src", timeout=2000)
                    except:
                        foto_url = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"

                    # 4. Deskripsi
                    try:
                        desc = await page.locator('button[data-item-id="category"]').inner_text(timeout=2000)
                    except:
                        desc = f"Kuliner lezat di daerah {lokasi}"

                    # Struktur JSON persis sesuai permintaan Anda
                    item_data = {
                        "id": f"u{i + 1}",
                        "nama": nama,
                        "kategori": "Kuliner & Oleh-Oleh",
                        "desa": lokasi.replace("Kecamatan ", ""),
                        "wa": wa,
                        "img": foto_url,
                        "desc": desc
                    }

                    daftar_data.append(item_data)
                except:
                    continue

            if daftar_data:
                os.makedirs("output", exist_ok=True)
                
                # Format nama file unik berdampingan dengan query & waktu
                query_clean = cleanup_filename(query)
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                file_json = f"output/{query_clean}_{timestamp}.json"

                with open(file_json, "w", encoding="utf-8") as f:
                    json.dump(daftar_data, f, ensure_ascii=False, indent=4)
                
                print(f"File JSON berhasil disimpan di: {file_json}")

        except Exception:
            pass
        finally:
        
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())