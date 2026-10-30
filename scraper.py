import asyncio
import sys
import urllib.parse
from playwright.async_api import async_playwright
import pandas as pd
import os

if sys.platform == "win32":
    asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())

async def main():
    # Parameter pencarian
    kategori = "Pantai & Resort,restoran,penginapan,toko oleh-oleh,hotel"
    lokasi = "Kecamatan Bantur,desa.srigonco"
    max_results = 30  # Ubah sesuai kebutuhan (misal: 50)
    scroll_depth = 20 # Kedalaman scroll
    
    query = f"{kategori} di {lokasi}"
    encoded_query = urllib.parse.quote(query)
    url = f"https://www.google.com/maps/search/{encoded_query}"
    
    user_agent_asli = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    
    print(f"[*] Memulai scraper untuk: {query}")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=['--disable-blink-features=AutomationControlled'])
        context = await browser.new_context(user_agent=user_agent_asli, viewport={"width": 1280, "height": 720})
        page = await context.new_page()
        
        try:
            await page.goto(url, wait_until="domcontentloaded", timeout=30000)
            await page.wait_for_selector('div[role="feed"]', timeout=15000)
            await asyncio.sleep(2)

            panel_kiri = page.locator('div[role="feed"]')

            print(f"[*] Melakukan scroll otomatis sebanyak {scroll_depth} kali...")
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
            print(f"[*] Ditemukan {len(link_unik)} link unik. Mengambil {target_ambil} data...")

            for i in range(target_ambil):
                try:
                    url_tempat = link_unik[i]
                    await page.goto(url_tempat, wait_until="domcontentloaded", timeout=15000)
                    await asyncio.sleep(0.8)

                    # 1. Nama Tempat
                    try:
                        nama = await page.locator("h1.DUwDvf").inner_text(timeout=3000)
                    except:
                        nama = "tidak ada nama"

                    # 2. Alamat
                    try:
                        alamat = await page.locator('button[data-item-id="address"]').inner_text(timeout=2000)
                        alamat = alamat.replace("\n", " ").strip()
                    except:
                        alamat = "tidak ada alamat"

                    # 3. Telepon
                    try:
                        telepon = await page.locator('button[data-item-id^="phone:tel:"]').inner_text(timeout=2000)
                    except:
                        telepon = "tidak ada telepon"

                    # 4. Jam Operasional
                    try:
                        jam = await page.locator('div[data-item-id="oh"]').inner_text(timeout=2000)
                        jam_operasional = jam.replace("\n", " | ").strip()
                    except:
                        jam_operasional = "tidak ada jam operasional"

                    # 5. Rating
                    try:
                        rating_element = page.locator("div.F7nice span").first
                        rating = await rating_element.inner_text(timeout=2000)
                        rating_bersih = float(rating.replace(",", "."))
                    except:
                        rating_bersih = 0.0

                    # 6. URL Foto Tempat
                    try:
                        foto_element = page.locator('div.ZKCDEc img, div.Appis1 img').first
                        foto_url = await foto_element.get_attribute("src", timeout=2000)
                    except:
                        foto_url = "tidak ada foto"

                    daftar_data.append({
                        "No": i + 1,
                        "Nama Tempat": nama,
                        "Rating": rating_bersih,
                        "Alamat Lengkap": alamat,
                        "Nomor Telepon": telepon,
                        "Jam Operasional": jam_operasional,
                        "URL Foto": foto_url
                    })
                    print(f"[+] [{i+1}/{target_ambil}] Sukses: {nama}")
                except Exception as e:
                    print(f"[X] Lewati item {i+1}: {e}")
                    continue

            if daftar_data:
                df = pd.DataFrame(daftar_data)
                os.makedirs("output", exist_ok=True)
                
                file_excel = "output/Hasil_Scraping_Maps.xlsx"
                file_csv = "output/Hasil_Scraping_Maps.csv"

                df.to_csv(file_csv, index=False, encoding="utf-8-sig")
                
                # Pastikan library xlsxwriter sudah terinstal (pip install xlsxwriter)
                writer = pd.ExcelWriter(file_excel, engine='xlsxwriter')
                df.to_excel(writer, index=False, sheet_name='DataMaps')
                writer.close()
                
                print(f"\n[V] SELESAI! Data berhasil disimpan ke folder 'output/':")
                print(f"    - {file_excel}")
                print(f"    - {file_csv}")
            else:
                print("[!] Tidak ada data yang berhasil dikumpulkan.")

        except Exception as e:
            print(f"Terjadi kesalahan utama: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())