const defaultWisataData = [
            {
                id: "w1",
                nama: "Pantai Balekambang",
                kecamatan: "Bantur",
                kategori: "Pantai",
                harga: "Rp 15.000",
                jam: "24 Jam",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                desc: "Dikenal sebagai Tanah Lot-nya Jawa Timur. Memiliki Pura Ismoyo di atas pulau karang kecil.",
                maps: "https://maps.google.com/?q=Pantai+Balekambang+Malang",
                isUnggulan: true,
                homestays: [{ nama: "Homestay Asri", tarif: "Rp 200.000 / malam", fasilitas: "AC, WiFi", wa: "6281234567801", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" }]
            },
            {
                id: "w2",
                nama: "Pantai 3 Warna & Clungup",
                kecamatan: "Sumbermanjing Wetan",
                kategori: "Konservasi",
                harga: "Rp 10.000 + Guide",
                jam: "07.00 - 16.00 WIB",
                img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
                desc: "Kawasan konservasi mangrove dan terumbu karang dengan gradasi air laut 3 warna.",
                maps: "https://maps.google.com/?q=Pantai+3+Warna+Malang",
                isUnggulan: true,
                homestays: [{ nama: "Eco-Lodge Clungup", tarif: "Rp 180.000 / malam", fasilitas: "Ramah Lingkungan", wa: "6281234567803", img: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=600&q=80" }]
            },
            {
                id: "w3",
                nama: "Teluk Asmara",
                kecamatan: "Gedangan",
                kategori: "Pantai",
                harga: "Rp 10.000",
                jam: "24 Jam",
                img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
                desc: "Sering disebut Raja Ampat-nya Malang karena gugusan pulau karang kecil.",
                maps: "https://maps.google.com/?q=Teluk+Asmara+Malang",
                isUnggulan: true,
                homestays: [{ nama: "Asmara Beach Camp", tarif: "Rp 150.000 / malam", fasilitas: "Sewa Tenda", wa: "6281234567804", img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80" }]
            },
            {
                id: "w4",
                nama: "Pantai Modangan",
                kecamatan: "Donomulyo",
                kategori: "Pantai",
                harga: "Rp 10.000",
                jam: "06.00 - 18.00 WIB",
                img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
                desc: "Pantai di ujung barat dengan perbukitan Paralayang tempat sunset terbaik.",
                maps: "https://maps.google.com/?q=Pantai+Modangan+Malang",
                isUnggulan: false,
                homestays: []
            },
            {
                id: "w5",
                nama: "Pantai Lenggoksono & Licin",
                kecamatan: "Tirtoyudo",
                kategori: "Pantai",
                harga: "Rp 10.000",
                jam: "24 Jam",
                img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80",
                desc: "Surga bagi pecinta selancar dan perahu wisata air terjun langsung ke laut.",
                maps: "https://maps.google.com/?q=Pantai+Lenggoksono+Malang",
                isUnggulan: false,
                homestays: []
            },
            {
                id: "w6",
                nama: "Pantai Sendangbiru & Pulau Sempu",
                kecamatan: "Sumbermanjing Wetan",
                kategori: "Konservasi",
                harga: "Rp 12.000",
                jam: "24 Jam",
                img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
                desc: "Pelabuhan nelayan terbesar berhadapan dengan Cagar Alam Pulau Sempu.",
                maps: "https://maps.google.com/?q=Pantai+Sendangbiru+Malang",
                isUnggulan: false,
                homestays: []
            },
                    
            {
                "id": "u7",
                "nama": "Pantai Licin",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "6281333183380",
                "img": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u8",
                "nama": "Pantai Sendiki",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u9",
                "nama": "Pantai Tamban",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "-",
                "img": "https://www.tempatwisata.pro/users_media/3092/gomancing-ngalam-tournamet-pantai-tamban-malang-jawa-timur-1024x681.jpg",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u10",
                "nama": "Pantai Banyu Meneng",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "-",
                "img": "https://ik.imagekit.io/tvlk/blog/2024/05/shutterstock_1921198601.jpg?tr=dpr-2%2Cw-675",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u11",
                "nama": "Pantai Gatra",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u12",
                "nama": "Toko taman ayu nganteb (TAN)",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "6282147548421",
                "img": "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2024/01/1813522024-WhatsApp-Image-2024-01-18-at-13.49.52.jpg",
                "desc": "Pusat belanja makanan dan oleh-oleh khas daerah Nganteb, Malang."
            },
            {
                "id": "u13",
                "nama": "Pantai Mrutu",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "-",
                "img": "https://1.bp.blogspot.com/-dnFixAJ4o8g/XbhLe3izdHI/AAAAAAAAALg/mLsvBoJBth0utl5prYl90fKW6gGH5_f5gCLcBGAsYHQ/s1600/Laut%2BBiru%2Bdan%2BOmbak%2BTenang%2Bdi%2BPantai%2BMrutu.jpg",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u14",
                "nama": "Pantai Jolangkung ꦥꦼꦱꦶꦱꦶꦂꦗꦺꦴꦭꦔ꧀ꦏꦸꦁ",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u15",
                "nama": "Pantai Wedi Awu",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "6281333183380",
                "img": "https://assets.promediateknologi.id/crop/0x0%3A0x0/750x500/webp/photo/p3/27/2024/01/16/Pantai-Wedi-Awu-Malang_exploremalangraya-991708302.jpg",
                "desc": "Kuliner lezat di daerah Kab Malang"
            },
            {
                "id": "u16",
                "nama": "Pantai Kondang Iwak",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Kab Malang",
                "wa": "-",
                "img": "https://sp-ao.shortpixel.ai/client/to_webp%2Cq_glossy%2Cret_img%2Cw_1000%2Ch_675/https%3A/blog.airpaz.com/wp-content/uploads/kondang-iwak_11zon_11zon.webp",
                "desc": "Kuliner lezat di daerah Kab Malang"
            }
        
        ];

        const defaultUmkmData = [
            {
                id: "u1",
                nama: "Terasi Udang Rebon Asli Sendangbiru",
                kategori: "Olahan Ikan Laut",
                desa: "Sendangbiru",
                wa: "6281234567891",
                img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
                desc: "Terasi murni olahan nelayan Sendangbiru tanpa bahan pengawet."
            },
            {
                id: "u2",
                nama: "Keripik Pisang Swaru & Salak",
                kategori: "Kuliner & Oleh-Oleh",
                desa: "Bantur",
                wa: "6281234567892",
                img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=600&q=80",
                desc: "Olahan buah segar lokal dengan teknik vacuum frying."
            },
            {
                id: "u3",
                nama: "Ikan Teri",
                kategori: "Olahan Ikan Laut",
                desa: "Sendangbiru",
                wa: "6281234567893",
                img: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=600&q=80",
                desc: "Ikan teri asin kualitas ekspor olahan nelayan lokal."
            },
            {
                id: "u4",
                nama: "Kerajinan Souvenir Batok Kelapa Pesisir",
                kategori: "Kerajinan & Souvenir",
                desa: "Gedangan",
                wa: "6281234567894",
                img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
                desc: "Cinderamata khas berbahan dasar limbah batok kelapa."
            },
            {
                id: "u5",
                nama: "Abon & Tuna Asap Cap Camar Laut",
                kategori: "Olahan Ikan Laut",
                desa: "Sendangbiru",
                wa: "6281234567895",
                img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
                desc: "Abon ikan tuna gurih murni tanpa campuran tepung."
            },
            {
                "id": "u6",
                "nama": "DEPOT BAHAGIA",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6285604142055",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u7",
                "nama": "Warung makan Pinka",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6281902271585",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u8",
                "nama": "Waroeng Baroqah88 - Seafood & Ikan Bakar",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6281216316724",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u9",
                "nama": "Cafe omah lawas",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6285733288003",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u10",
                "nama": "Warung Mbak Ti'ah",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6289676141246",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u11",
                "nama": "Chicken House",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6281336243800",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u12",
                "nama": "BAKSO IDOLA BANTUR MAS HOKLI",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u13",
                "nama": "LESEHAN SEAFOOD MBAK FITRI",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u14",
                "nama": "Pring Sewu Bantur",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u15",
                "nama": "Rumah Makan Istana Laut",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6282221333490",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u16",
                "nama": "Dapur Kampung",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u17",
                "nama": "Warung Ndeso \"73\"",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6281334022039",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u18",
                "nama": "Bakso Sumber kaya (Cak Rodat)",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u19",
                "nama": "BAKSO PRIMA",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "-",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            },
            {
                "id": "u20",
                "nama": "KEDAI KELUARGA",
                "kategori": "Kuliner & Oleh-Oleh",
                "desa": "Bantur",
                "wa": "6285335983599",
                "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                "desc": "Kuliner lezat di daerah Kecamatan Bantur"
            }
        
        ];

        const defaultKategoriData = [
            { id: "k1", nama: "Pantai", jenis: "Wisata", isVisible: true },
            { id: "k2", nama: "Konservasi", jenis: "Wisata", isVisible: true },
            { id: "k3", nama: "Olahan Ikan Laut", jenis: "UMKM", isVisible: true },
            { id: "k4", nama: "Kuliner & Oleh-Oleh", jenis: "UMKM", isVisible: true }
        ];

        const defaultDamriData = {
            wa: "6281234567890",
            announcement: "",
            routes: [
                {
                    id: "r1",
                    label: "Rute Utama 1",
                    nama: "Stasiun Malang Kota Baru ⇆ Pantai Balekambang",
                    tarif: "Rp 25.000",
                    pergi: "07.00 WIB & 11.00 WIB",
                    pulang: "13.00 WIB & 16.00 WIB",
                    titik: "Pool DAMRI Stasiun Malang, Rest Area Gadang, Terminal Gondanglegi, Pantai Balekambang.", ticketInfo: "Konfirmasi tiket melalui DAMRI Apps atau loket resmi.", ticketUrl: "", ticketActive: true
                },
                {
                    id: "r2",
                    label: "Rute Utama 2",
                    nama: "Stasiun Malang Kota Baru ⇆ Pantai Sendangbiru",
                    tarif: "Rp 25.000",
                    pergi: "08.00 WIB & 12.00 WIB",
                    pulang: "14.00 WIB & 17.00 WIB",
                    titik: "Stasiun Malang Kota Baru, Pasar Turen, Sumbermanjing Wetan, Pelabuhan Sendangbiru.", ticketInfo: "Konfirmasi tiket melalui DAMRI Apps atau loket resmi.", ticketUrl: "", ticketActive: true
                }
            ]
        };

        let wisataList = [];
        let resortList = [];
        let umkmList = [];
        let kategoriList = [];
        let eventList = [];
        const DEFAULT_ROAD_CLOSURES = [
            {
                id: "r3",
                area: "Jalur Wisata Malang Selatan",
                title: "Imbauan keselamatan perjalanan: periksa kondisi kendaraan dan patuhi rambu lalu lintas.",
                road: "Seluruh jalur wisata pesisir Malang Selatan",
                time: "Setiap saat",
                detail: "Pastikan rem, ban, dan bahan bakar dalam kondisi baik. Kurangi kecepatan di jalan berkelok serta ikuti arahan petugas."
            }
        ];
        let roadClosureList = [];
        let damriData = {};
        let currentAdminRole = null;
        let currentAdminArea = null; // Wilayah kecamatan khusus akun pengelola desa

        let trafficInfo = {
            title: "INFO LALU LINTAS: Penutupan Jalur Lintas Selatan (JLS) Sendangbiru untuk Upacara Petik Laut.",
            time: "Hari Ini - s/d 18.00 WIB",
            detail: "Kendaraan roda 4 dari arah Turen yang hendak ke Sendangbiru dialihkan melalui rute alternatif Pasar Gedangan - Bajulmati."
        };


        // Manajemen daftar kecamatan (khusus Admin Utama).
        const DEFAULT_KECAMATAN = ["Bantur", "Gedangan", "Donomulyo", "Sumbermanjing Wetan", "Tirtoyudo"];
        const KECAMATAN_STORAGE_KEY = "jelajah_malang_selatan_kecamatan";

        function getKecamatanList() {
            try {
                const saved = JSON.parse(localStorage.getItem(KECAMATAN_STORAGE_KEY));
                return Array.isArray(saved) ? saved.filter(v => typeof v === "string" && v.trim()) : DEFAULT_KECAMATAN.slice();
            } catch (error) {
                return DEFAULT_KECAMATAN.slice();
            }
        }

        function saveKecamatanList(list) {
            localStorage.setItem(KECAMATAN_STORAGE_KEY, JSON.stringify(list));
        }


        function syncKecamatanSelectOptions() {
            const areas = getKecamatanList();
            const configs = [
                { id: "filter-kecamatan", all: { value: "ALL", label: "Semua Kecamatan" } },
                { id: "account-area" },
                { id: "form-roadclosure-area-select" },
                { id: "form-event-area-select" },
                { id: "form-wisata-kecamatan" }
            ];
            configs.forEach(config => {
                const select = document.getElementById(config.id);
                if (!select) return;
                const current = select.value;
                const options = config.all ? [config.all] : [];
                areas.forEach(area => options.push({ value: area, label: area }));
                select.innerHTML = options.map(option =>
                    `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`
                ).join("");
                if (options.some(option => option.value === current)) select.value = current;
            });

            const scrape = document.getElementById("db-scrape-area");
            if (scrape) {
                const current = scrape.value;
                const options = [{ value: "Malang Selatan, Kabupaten Malang, Jawa Timur", label: "Semua Malang Selatan" }]
                    .concat(areas.map(area => ({
                        value: `Kecamatan ${area}, Kabupaten Malang, Jawa Timur`,
                        label: area
                    })));
                scrape.innerHTML = options.map(option =>
                    `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`
                ).join("");
                if (options.some(option => option.value === current)) scrape.value = current;
            }
        }

        function renderAdminKecamatanTable() {
            const tbody = document.getElementById("admin-kecamatan-table");
            if (!tbody) return;
            const areas = getKecamatanList();
            tbody.innerHTML = areas.length ? areas.map((area, index) => `
                <tr class="hover:bg-slate-50">
                    <td class="p-3 font-semibold text-slate-700">${escapeHtml(area)}</td>
                    <td class="p-3 text-right">
                        <button type="button" onclick="deleteKecamatan(${index})" class="kecamatan-delete-btn px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-semibold text-xs">
                            <i class="fa-solid fa-trash mr-1"></i> Hapus
                        </button>
                    </td>
                </tr>
            `).join("") : '<tr><td colspan="2" class="p-4 text-center text-slate-500">Belum ada kecamatan.</td></tr>';
        }

        function addKecamatan(event) {
            event.preventDefault();
            const input = document.getElementById("kecamatan-admin-name");
            if (!input) return;
            const name = input.value.trim().replace(/\s+/g, " ");
            if (!name) return;
            const areas = getKecamatanList();
            if (areas.some(area => area.toLocaleLowerCase("id") === name.toLocaleLowerCase("id"))) {
                showToast("Kecamatan tersebut sudah terdaftar.", "error");
                return;
            }
            areas.push(name);
            saveKecamatanList(areas);
            input.value = "";
            renderAdminKecamatanTable();
            renderKecamatanPills();
            syncKecamatanSelectOptions();
            showToast("Kecamatan berhasil ditambahkan.", "success");
        }

        function deleteKecamatan(index) {
            const areas = getKecamatanList();
            if (!Number.isInteger(index) || index < 0 || index >= areas.length) return;
            if (!confirm(`Hapus kecamatan "${areas[index]}" dari daftar?`)) return;
            areas.splice(index, 1);
            saveKecamatanList(areas);
            renderAdminKecamatanTable();
            renderKecamatanPills();
            syncKecamatanSelectOptions();
            showToast("Kecamatan berhasil dihapus dari daftar.", "success");
        }

        function initKecamatanAdmin() {
            const form = document.getElementById("kecamatan-admin-form");
            if (form && !form.dataset.kecamatanReady) {
                form.addEventListener("submit", addKecamatan);
                form.dataset.kecamatanReady = "true";
            }
            syncKecamatanSelectOptions();
            renderAdminKecamatanTable();
        }

        const HOME_PROMO_DEFAULTS = {
            economyLabel: 'Ekonomi Lokal', economyTitle: 'Dukung Produk UMKM Pesisir',
            economyDescription: 'Beli oleh-oleh khas olahan ikan segar, keripik buah, dan kerajinan lokal langsung dari warga desa pesisir Malang Selatan.',
            economyButton: 'Lihat Katalog UMKM', economyBackground: 'linear-gradient(135deg, #065f46, #059669)',
            transportLabel: 'Transportasi Publik', transportTitle: 'Layanan Bus DAMRI KSPN',
            transportDescription: 'Perjalanan hemat, aman, dan nyaman menuju Pantai Balekambang dan Sendangbiru langsung dari Stasiun Malang Kota Baru.',
            transportButton: 'Cek Jadwal & Tarif', transportBackground: 'linear-gradient(135deg, #164e75, #0369a1)'
        };
        let homePromoImageState = { economy: '', transport: '' };
        function getHomePromoSettings() {
            try { return { ...HOME_PROMO_DEFAULTS, ...(JSON.parse(localStorage.getItem('jms_home_promo_settings') || '{}')) }; }
            catch (_) { return { ...HOME_PROMO_DEFAULTS }; }
        }
        function applyHomePromoSettings(cfg = getHomePromoSettings()) {
            const map = { 'home-promo-economy-label': cfg.economyLabel, 'home-promo-economy-title': cfg.economyTitle, 'home-promo-economy-description': cfg.economyDescription, 'home-promo-economy-button': cfg.economyButton, 'home-promo-transport-label': cfg.transportLabel, 'home-promo-transport-title': cfg.transportTitle, 'home-promo-transport-description': cfg.transportDescription, 'home-promo-transport-button': cfg.transportButton };
            Object.entries(map).forEach(([id, value]) => { const el = document.getElementById(id); if (el) el.textContent = value ?? ''; });
            const cards = document.querySelectorAll('.home-promo-card');
            const setCardBackground = (card, image, fallback) => {
                if (!card) return;
                card.style.background = image
                    ? `linear-gradient(rgba(5, 25, 35, .48), rgba(5, 25, 35, .58)), url("${image}") center / cover no-repeat`
                    : fallback;
            };
            setCardBackground(cards[0], cfg.economyImage, cfg.economyBackground || HOME_PROMO_DEFAULTS.economyBackground);
            setCardBackground(cards[1], cfg.transportImage, cfg.transportBackground || HOME_PROMO_DEFAULTS.transportBackground);
        }
        function compressPromoImage(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onerror = () => reject(new Error('Gagal membaca foto.'));
                reader.onload = () => {
                    const img = new Image();
                    img.onerror = () => reject(new Error('File foto tidak valid.'));
                    img.onload = () => {
                        const maxSide = 1400, scale = Math.min(1, maxSide / Math.max(img.width, img.height));
                        const canvas = document.createElement('canvas');
                        canvas.width = Math.round(img.width * scale); canvas.height = Math.round(img.height * scale);
                        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                        resolve(canvas.toDataURL('image/jpeg', .78));
                    };
                    img.src = reader.result;
                };
                reader.readAsDataURL(file);
            });
        }
        async function previewHomePromoImage(kind, input) {
            const file = input.files && input.files[0]; if (!file) return;
            if (!file.type.startsWith('image/')) { showToast('Pilih file gambar yang valid.', 'error'); input.value = ''; return; }
            try {
                homePromoImageState[kind] = await compressPromoImage(file);
                const preview = document.getElementById(`promo-${kind}-image-preview`);
                if (preview) { preview.src = homePromoImageState[kind]; preview.classList.remove('hidden'); }
                showToast('Foto siap digunakan. Klik Simpan Perubahan untuk menerapkan.', 'success');
            } catch (err) { showToast(err.message || 'Foto gagal diproses.', 'error'); }
        }
        function clearHomePromoImage(kind) {
            homePromoImageState[kind] = '';
            const input = document.getElementById(`promo-${kind}-image-file`); if (input) input.value = '';
            const preview = document.getElementById(`promo-${kind}-image-preview`); if (preview) { preview.removeAttribute('src'); preview.classList.add('hidden'); }
            showToast('Foto akan dihapus setelah perubahan disimpan.', 'info');
        }
        function loadHomePromoSettings() {
            const cfg = getHomePromoSettings(); applyHomePromoSettings(cfg);
            homePromoImageState = { economy: cfg.economyImage || '', transport: cfg.transportImage || '' };
            ['economy','transport'].forEach(kind => { const preview=document.getElementById(`promo-${kind}-image-preview`); if(preview && homePromoImageState[kind]) { preview.src=homePromoImageState[kind]; preview.classList.remove('hidden'); } else if(preview) preview.classList.add('hidden'); });
            const fields = { 'promo-economy-label':'economyLabel','promo-economy-title':'economyTitle','promo-economy-description':'economyDescription','promo-economy-button':'economyButton','promo-economy-background':'economyBackground','promo-transport-label':'transportLabel','promo-transport-title':'transportTitle','promo-transport-description':'transportDescription','promo-transport-button':'transportButton','promo-transport-background':'transportBackground' };
            Object.entries(fields).forEach(([id,key]) => { const el=document.getElementById(id); if(el) el.value=cfg[key] || ''; });
        }
        function saveHomePromoSettings(event) {
            event.preventDefault();
            if (currentAdminRole !== 'super') { showToast('Hanya Admin Utama yang dapat mengubah promo beranda.', 'error'); return; }
            const fields = { 'promo-economy-label':'economyLabel','promo-economy-title':'economyTitle','promo-economy-description':'economyDescription','promo-economy-button':'economyButton','promo-economy-background':'economyBackground','promo-transport-label':'transportLabel','promo-transport-title':'transportTitle','promo-transport-description':'transportDescription','promo-transport-button':'transportButton','promo-transport-background':'transportBackground' };
            const cfg={...HOME_PROMO_DEFAULTS, economyImage:homePromoImageState.economy, transportImage:homePromoImageState.transport}; Object.entries(fields).forEach(([id,key])=>{const el=document.getElementById(id);if(el)cfg[key]=el.value.trim()||HOME_PROMO_DEFAULTS[key];});
            try { localStorage.setItem('jms_home_promo_settings',JSON.stringify(cfg)); applyHomePromoSettings(cfg); showToast('Promo Beranda berhasil diperbarui.','success'); }
            catch (_) { showToast('Penyimpanan penuh. Gunakan foto yang lebih kecil.', 'error'); }
        }
        function resetHomePromoSettings() {
            if(currentAdminRole!=='super'){showToast('Hanya Admin Utama yang dapat mengubah promo beranda.','error');return;}
            localStorage.removeItem('jms_home_promo_settings'); loadHomePromoSettings(); showToast('Promo Beranda dikembalikan ke pengaturan awal.','success');
        }

        window.onload = function() {
            loadState();
            // Isi tiga kolom footer saat halaman publik pertama kali dibuka.
            applyFooterSettings();
            renderKecamatanPills();
            renderFeaturedWisata();
            renderWisataGrid();
            renderUmkmCategoryPills();
            renderUmkmGrid();
            renderEventGrid();
            renderPublicDamriView();
            renderAdminTables();
            initKecamatanAdmin();
            loadHomePromoSettings();
            
            renderTrafficRunningText();
            document.getElementById('adm-traffic-title').value = trafficInfo.title;
            document.getElementById('adm-traffic-time').value = trafficInfo.time;
            document.getElementById('adm-traffic-detail').value = trafficInfo.detail;

            switchTab('beranda');

            document.addEventListener('click', function(e) {
                const searchInput = document.getElementById('global-search');
                const suggestionsBox = document.getElementById('search-suggestions');
                if (searchInput && suggestionsBox && !searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                    suggestionsBox.classList.add('hidden');
                }
            });
        };

        function loadState() {
            const savedWisata = localStorage.getItem('jms_wisata');
            wisataList = savedWisata ? JSON.parse(savedWisata).map((w, index) => ({
                ...w,
                homestays: Array.isArray(w.homestays) ? w.homestays.map((h, hIndex) => ({
                    ...h,
                    img: h.img || [
                        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
                        "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=600&q=80",
                        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80"
                    ][(index + hIndex) % 3]
                })) : []
            })) : defaultWisataData;

            const savedResorts = localStorage.getItem('jms_resorts');
            resortList = savedResorts ? JSON.parse(savedResorts) : [];
            // Migrasi homestay bawaan ke daftar resort yang bisa dikelola terpisah.
            if (!savedResorts) {
                wisataList.forEach(w => (w.homestays || []).forEach((h, i) => {
                    resortList.push({ id: `legacy_${w.id}_${i}`, wisataId: w.id, area: w.kecamatan, nama: h.nama || 'Homestay', tarif: h.tarif || 'Hubungi pengelola', fasilitas: h.fasilitas || '', wa: h.wa || '', img: h.img || '' });
                }));
                localStorage.setItem('jms_resorts', JSON.stringify(resortList));
            }

            const savedUmkm = localStorage.getItem('jms_umkm');
            umkmList = savedUmkm ? JSON.parse(savedUmkm) : defaultUmkmData;

            const savedKategori = localStorage.getItem('jms_kategori');
            kategoriList = savedKategori ? JSON.parse(savedKategori) : defaultKategoriData;

            const savedDamri = localStorage.getItem('jms_damri');
            damriData = savedDamri ? JSON.parse(savedDamri) : defaultDamriData;

            const savedEvents = localStorage.getItem('jms_events');
            eventList = savedEvents ? JSON.parse(savedEvents).map(ev => ({...ev, dateObj: new Date(ev.dateObj || ev.dateISO || '2026-09-27')})) : [
                {
                    id: "e1",
                    title: "Upacara Adat Petik Laut Sendangbiru",
                    tanggalStr: "27 September 2026",
                    dateObj: new Date("2026-09-27"),
                    lokasi: "Pelabuhan TPI Sendangbiru",
                    desa: "Sendangbiru",
                    area: "Sumbermanjing Wetan",
                    status: "Berlangsung",
                    isBerlangsung: true,
                    desc: "Tradisi larung sesaji tasyakuran nelayan atas hasil laut yang melimpah."
                },
                {
                    id: "e2",
                    title: "Festival Surfing Lenggoksono Open",
                    tanggalStr: "15 November 2026",
                    dateObj: new Date("2026-11-15"),
                    lokasi: "Pantai Lenggoksono, Tirtoyudo",
                    desa: "Lenggoksono",
                    area: "Tirtoyudo",
                    status: "Mendatang",
                    isBerlangsung: false,
                    desc: "Kompetisi selancar regional."
                }
            ];
            const savedRoadClosures = localStorage.getItem('jms_road_closures');
            roadClosureList = savedRoadClosures ? JSON.parse(savedRoadClosures) : DEFAULT_ROAD_CLOSURES.map(item => ({ ...item }));

            eventList = eventList.map(ev => ({
                ...ev,
                area: ev.area || (String(ev.desa || '').toLowerCase().includes('lenggoksono') ? 'Tirtoyudo' : (String(ev.desa || '').toLowerCase().includes('sendangbiru') ? 'Sumbermanjing Wetan' : ''))
            }));
        }

        function saveState() {
            localStorage.setItem('jms_wisata', JSON.stringify(wisataList));
            localStorage.setItem('jms_resorts', JSON.stringify(resortList));
            localStorage.setItem('jms_umkm', JSON.stringify(umkmList));
            localStorage.setItem('jms_kategori', JSON.stringify(kategoriList));
            localStorage.setItem('jms_damri', JSON.stringify(damriData));
            localStorage.setItem('jms_events', JSON.stringify(eventList));
            localStorage.setItem('jms_road_closures', JSON.stringify(roadClosureList));
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-view').forEach(v => v.classList.add('hidden'));
            document.getElementById(`view-${tabId}`).classList.remove('hidden');

            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('data-target') === tabId) {
                    link.classList.add('bg-coastal-50', 'text-coastal-600');
                } else {
                    link.classList.remove('bg-coastal-50', 'text-coastal-600');
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        function dismissBanner() {
            document.getElementById('top-traffic-banner').classList.add('hidden');
        }

        function openTrafficModal() {
            const notices = roadClosureList.length ? roadClosureList.map(item => `${item.area}: ${item.title} — ${item.road}. Waktu: ${item.time}. Rute alternatif/detail: ${item.detail}`).join('\n\n') : trafficInfo.detail;
            document.getElementById('modal-traffic-body').innerText = notices;
            openModal('modal-traffic-detail');
        }

        function renderTrafficRunningText() {
            const track = document.getElementById('traffic-ticker-track');
            const timeBadge = document.getElementById('banner-warning-time');
            if (!track || !timeBadge) return;
            const items = roadClosureList.filter(item => item && item.title && item.area);
            if (!items.length) {
                track.classList.remove('is-moving');
                track.innerHTML = `<span id="banner-warning-title" class="line-clamp-1">${escapeHtml(trafficInfo.title)}</span>`;
                timeBadge.innerText = trafficInfo.time;
                return;
            }
            const content = items.map(item => `<span class="inline-flex items-center gap-2"><strong class="text-slate-950">${escapeHtml(item.area.toUpperCase())}</strong><span>${escapeHtml(item.title)}</span><span class="opacity-90">(${escapeHtml(item.road)} · ${escapeHtml(item.time)})</span><span class="text-slate-900">•</span></span>`).join('');
            const moving = items.length > 1;
            track.className = `traffic-ticker-track${moving ? ' is-moving' : ''}`;
            track.innerHTML = moving ? `<span class="traffic-ticker-copy">${content}</span><span class="traffic-ticker-copy" aria-hidden="true">${content}</span>` : `<span class="traffic-ticker-copy">${content}</span>`;
            timeBadge.innerText = `${items.length} INFORMASI`;
        }

        function updateTrafficBanner(e) {
            e.preventDefault();
            trafficInfo.title = document.getElementById('adm-traffic-title').value;
            trafficInfo.time = document.getElementById('adm-traffic-time').value;
            trafficInfo.detail = document.getElementById('adm-traffic-detail').value;
            saveState();

            renderTrafficRunningText();
            showToast("Informasi Peringatan Lalu Lintas Berhasil Diperbarui!", "success");
        }

        function renderKecamatanPills() {
            const kecs = ["Semua", ...getKecamatanList()];
            document.getElementById('home-kecamatan-pills').innerHTML = kecs.map(k => `
                <button onclick="filterKecamatanFromHome('${k}')" class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-slate-100 hover:bg-coastal-500 hover:text-white transition text-slate-700 shadow-sm border border-slate-200 cursor-pointer">
                    <i class="fa-solid fa-location-dot mr-1"></i> ${k}
                </button>
            `).join('');
        }

        function filterKecamatanFromHome(kec) {
            switchTab('wisata');
            document.getElementById('filter-kecamatan').value = kec === "Semua" ? "ALL" : kec;
            applyWisataFilters();
        }

        function renderFeaturedWisata() {
            const container = document.getElementById('home-featured-grid');
            const featured = wisataList.filter(w => w.isUnggulan);
            if (featured.length === 0) {
                container.innerHTML = `<div class="col-span-full text-center py-8 text-slate-400 text-sm">Belum ada pantai unggulan yang diaktifkan di Panel Admin.</div>`;
                return;
            }
            container.innerHTML = featured.map(w => createWisataCardHTML(w)).join('');
        }

        // Pagination publik: maksimal sekitar 5 baris pada grid desktop.
        const WISATA_PAGE_SIZE = 15; // 3 kolom x 5 baris
        // UMKM: maksimal 5 baris per halaman sesuai jumlah kolom grid responsif.
        function getUmkmPageSize() {
            const width = window.innerWidth || document.documentElement.clientWidth;
            const columns = width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 640 ? 2 : 1;
            return columns * 5;
        }
        let lastUmkmPageSize = getUmkmPageSize();
        let wisataCurrentPage = 1;
        let umkmCurrentPage = 1;
        let currentUmkmData = null;

        function renderNumberedPagination(containerId, totalItems, pageSize, currentPage, callbackName) {
            const container = document.getElementById(containerId);
            if (!container) return;
            const totalPages = Math.ceil(totalItems / pageSize);
            if (totalPages <= 1) { container.innerHTML = ''; return; }
            const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
            const sorted = [...pages].filter(p => p >= 1 && p <= totalPages).sort((a,b) => a-b);
            let html = `<button type="button" onclick="${callbackName}(${Math.max(1,currentPage-1)})" class="pagination-btn" ${currentPage===1?'disabled':''} aria-label="Halaman sebelumnya">&laquo;</button>`;
            let previous = 0;
            sorted.forEach(page => {
                if (previous && page - previous > 1) html += `<span class="pagination-ellipsis">...</span>`;
                html += `<button type="button" onclick="${callbackName}(${page})" class="pagination-btn ${page===currentPage?'active':''}" ${page===currentPage?'aria-current="page"':''}>${page}</button>`;
                previous = page;
            });
            html += `<button type="button" onclick="${callbackName}(${Math.min(totalPages,currentPage+1)})" class="pagination-btn" ${currentPage===totalPages?'disabled':''} aria-label="Halaman berikutnya">&raquo;</button>`;
            container.innerHTML = html;
        }

        function goToWisataPage(page) {
            wisataCurrentPage = page;
            renderWisataGrid(window.currentWisataData || wisataList, false);
            const section = document.getElementById('wisata-grid');
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function goToUmkmPage(page) {
            umkmCurrentPage = page;
            renderUmkmGrid(currentUmkmData || umkmList, false);
            const section = document.getElementById('umkm-grid');
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function renderWisataGrid(dataToRender = wisataList, resetPage = true) {
            const container = document.getElementById('wisata-grid');
            const emptyState = document.getElementById('wisata-empty');
            const paginationId = 'wisata-pagination';
            const visibleData = dataToRender.filter(w => {
                const katObj = kategoriList.find(k => k.nama.toLowerCase() === w.kategori.toLowerCase());
                return !katObj || katObj.isVisible !== false;
            });
            window.currentWisataData = dataToRender;
            if (resetPage) wisataCurrentPage = 1;
            document.getElementById('wisata-count').innerText = visibleData.length;
            if (visibleData.length === 0) {
                container.innerHTML = '';
                document.getElementById(paginationId).innerHTML = '';
                emptyState.classList.remove('hidden');
                return;
            }
            emptyState.classList.add('hidden');
            const totalPages = Math.ceil(visibleData.length / WISATA_PAGE_SIZE);
            if (wisataCurrentPage > totalPages) wisataCurrentPage = totalPages;
            const start = (wisataCurrentPage - 1) * WISATA_PAGE_SIZE;
            container.innerHTML = visibleData.slice(start, start + WISATA_PAGE_SIZE).map(w => createWisataCardHTML(w)).join('');
            renderNumberedPagination(paginationId, visibleData.length, WISATA_PAGE_SIZE, wisataCurrentPage, 'goToWisataPage');
        }

        function createWisataCardHTML(w) {
            return `
                <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="relative h-48 overflow-hidden">
                            <img src="${w.img}" alt="${w.nama}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x400/0284c7/ffffff?text=Pantai+Malang'">
                            <span class="absolute top-3 left-3 bg-coastal-900/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                                <i class="fa-solid fa-location-dot text-sand-500"></i> Kec. ${w.kecamatan}
                            </span>
                            ${w.isUnggulan ? `<span class="absolute top-3 right-3 bg-amber-500 text-slate-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase shadow flex items-center gap-1"><i class="fa-solid fa-star"></i> Unggulan</span>` : ''}
                        </div>
                        <div class="p-5">
                            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-coastal-600 transition">${w.nama}</h3>
                            <p class="text-xs text-slate-500 line-clamp-2 mb-4 font-light leading-relaxed">${w.desc}</p>
                            
                            <div class="flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-3">
                                <span><i class="fa-solid fa-ticket text-coastal-500 mr-1"></i> ${w.harga}</span>
                                <span><i class="fa-solid fa-clock text-emerald-500 mr-1"></i> ${w.jam}</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-5 pt-0 flex gap-2">
                        <button onclick="openWisataDetailModal('${w.id}')" class="flex-1 py-2.5 bg-coastal-50 hover:bg-coastal-500 hover:text-white text-coastal-700 font-bold text-xs rounded-xl transition text-center shadow-sm cursor-pointer">
                            Detail & Homestay
                        </button>
                        <a href="${w.maps}" target="_blank" class="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition text-xs" title="Petunjuk Maps">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </a>
                    </div>
                </div>
            `;
        }

        function applyWisataFilters() {
            const kec = document.getElementById('filter-kecamatan').value;
            const kat = document.getElementById('filter-kategori').value;

            let filtered = wisataList.filter(item => {
                const matchKec = (kec === "ALL" || item.kecamatan === kec);
                const matchKat = (kat === "ALL" || item.kategori === kat);
                return matchKec && matchKat;
            });
            renderWisataGrid(filtered);
        }

        function resetWisataFilters() {
            document.getElementById('filter-kecamatan').value = "ALL";
            document.getElementById('filter-kategori').value = "ALL";
            renderWisataGrid(wisataList);
        }

        function openWisataDetailModal(id) {
            const item = wisataList.find(w => w.id === id);
            if (!item) return;

            document.getElementById('modal-wisata-img').src = item.img;
            document.getElementById('modal-wisata-kecamatan').innerText = `Kecamatan ${item.kecamatan}`;
            document.getElementById('modal-wisata-title').innerText = item.nama;
            document.getElementById('modal-wisata-harga').innerText = item.harga;
            document.getElementById('modal-wisata-jam').innerText = item.jam;
            document.getElementById('modal-wisata-desc').innerText = item.desc;
            document.getElementById('modal-wisata-maps-btn').href = item.maps;

            const homestaysContainer = document.getElementById('modal-wisata-homestays');
            const itemResorts = resortList.filter(r => r.wisataId === item.id);
            if (itemResorts.length > 0 || (item.homestays && item.homestays.length > 0)) {
                const publicHomestays = itemResorts.length ? itemResorts : (item.homestays || []);
                homestaysContainer.innerHTML = publicHomestays.map(h => `
                    <div class="bg-slate-50 rounded-xl border border-slate-200 p-3 text-xs">
                        <div class="flex items-center gap-3">
                            ${h.img ? `<img src="${h.img}" alt="Foto ${h.nama}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border border-slate-200 shrink-0" loading="lazy" onerror="this.outerHTML='<div class='w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center shrink-0'><i class='fa-solid fa-hotel text-xl'></i></div>'">` : `<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center shrink-0"><i class="fa-solid fa-hotel text-xl"></i></div>`}
                            <div class="flex-1 min-w-0">
                                <h4 class="font-bold text-slate-900 text-sm">${h.nama}</h4>
                                <p class="text-slate-500 font-medium mt-1">${h.tarif} • <span class="text-coastal-600">${h.fasilitas}</span></p>
                            </div>
                            <a href="https://wa.me/${h.wa}?text=Halo,%20saya%20ingin%20tanya%20ketersediaan%20homestay%20${encodeURIComponent(h.nama)}" target="_blank" rel="noopener" class="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-center transition flex items-center justify-center gap-1 shrink-0">
                                <i class="fa-brands fa-whatsapp"></i><span class="hidden sm:inline">Booking WA</span><span class="sm:hidden">Booking</span>
                            </a>
                        </div>
                    </div>
                `).join('');
            } else {
                homestaysContainer.innerHTML = `<p class="text-xs text-slate-400 italic">Belum ada data penginapan mitra terdaftar untuk destinasi ini.</p>`;
            }
            openModal('modal-wisata-detail');
        }


        // Pertahankan posisi produk saat ukuran layar berubah dan jumlah kolom berganti.
        let umkmResizeTimer = null;
        window.addEventListener('resize', () => {
            window.clearTimeout(umkmResizeTimer);
            umkmResizeTimer = window.setTimeout(() => {
                const nextPageSize = getUmkmPageSize();
                if (nextPageSize === lastUmkmPageSize) return;
                const firstVisibleIndex = Math.max(0, (umkmCurrentPage - 1) * lastUmkmPageSize);
                umkmCurrentPage = Math.floor(firstVisibleIndex / nextPageSize) + 1;
                renderUmkmGrid(currentUmkmData || umkmList, false);
            }, 180);
        });

        function renderUmkmCategoryPills() {
            const activeCategories = kategoriList
                .filter(k => k.jenis === "UMKM" && (k.isVisible !== false))
                .map(k => k.nama);
            
            const categories = ["Semua", ...activeCategories];
            document.getElementById('umkm-category-pills').innerHTML = categories.map(cat => `
                <button onclick="filterUmkmCategory('${cat}')" class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 cursor-pointer">
                    ${cat}
                </button>
            `).join('');
        }

        function filterUmkmCategory(cat) {
            currentUmkmData = (cat === "Semua") ? umkmList : umkmList.filter(u => u.kategori === cat);
            renderUmkmGrid(currentUmkmData);
        }

        function renderUmkmGrid(dataToRender = umkmList, resetPage = true) {
            const visibleData = dataToRender.filter(u => {
                const katObj = kategoriList.find(k => k.nama.toLowerCase() === u.kategori.toLowerCase());
                return !katObj || katObj.isVisible !== false;
            });
            currentUmkmData = dataToRender;
            if (resetPage) umkmCurrentPage = 1;
            const pageSize = getUmkmPageSize();
            lastUmkmPageSize = pageSize;
            const totalPages = Math.ceil(visibleData.length / pageSize);
            if (umkmCurrentPage > Math.max(1,totalPages)) umkmCurrentPage = Math.max(1,totalPages);
            const start = (umkmCurrentPage - 1) * pageSize;
            const pageData = visibleData.slice(start, start + pageSize);
            document.getElementById('umkm-grid').innerHTML = pageData.map(u => `
                <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div class="relative h-44 overflow-hidden">
                            <img src="${u.img}" alt="${u.nama}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/600x400/10b981/ffffff?text=Produk+UMKM'">
                            <span class="absolute top-3 left-3 bg-nature-600/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">${u.kategori}</span>
                        </div>
                        <div class="p-4">
                            <span class="text-[11px] font-bold text-slate-400 block mb-0.5"><i class="fa-solid fa-location-dot"></i> Desa ${u.desa}</span>
                            <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">${u.nama}</h3>
                            <p class="text-xs text-slate-500 line-clamp-3 font-light leading-relaxed">${u.desc}</p>
                        </div>
                    </div>
                    <div class="p-4 pt-0">
                        <a href="https://wa.me/${u.wa}?text=Halo%20${encodeURIComponent(u.nama)},%20saya%20tertarik%20pesan" target="_blank" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition text-center flex items-center justify-center gap-1.5 shadow-sm">
                            <i class="fa-brands fa-whatsapp text-sm"></i> Hubungi / Pesan
                        </a>
                    </div>
                </div>
            `).join('');
            renderNumberedPagination('umkm-pagination', visibleData.length, pageSize, umkmCurrentPage, 'goToUmkmPage');
        }

        function applyEventFilters() {
            const timeFilter = document.getElementById('filter-event-waktu')?.value || 'ALL';
            const locationFilter = document.getElementById('filter-event-desa')?.value || 'ALL';
            const today = new Date(); today.setHours(0, 0, 0, 0);
            const thisMonth = today.getMonth();
            const thisYear = today.getFullYear();
            const filtered = eventList.filter(ev => {
                const locText = `${ev.desa || ''} ${ev.lokasi || ''} ${ev.area || ''}`.toLowerCase();
                const locationMatch = locationFilter === 'ALL' || locText.includes(locationFilter.toLowerCase());
                const dateString = ev.dateISO || (ev.dateObj instanceof Date && !Number.isNaN(ev.dateObj.getTime()) ? ev.dateObj.toISOString().slice(0, 10) : (typeof ev.dateObj === 'string' ? ev.dateObj.slice(0, 10) : ''));
                const date = dateString ? new Date(dateString + 'T00:00:00') : null;
                let timeMatch = true;
                if (timeFilter === 'berlangsung') timeMatch = !!date && date.getTime() === today.getTime();
                else if (timeFilter === 'bulan_ini') timeMatch = !!date && date.getMonth() === thisMonth && date.getFullYear() === thisYear;
                else if (timeFilter === 'mendatang') timeMatch = !!date && date.getTime() > today.getTime();
                return locationMatch && timeMatch;
            });
            renderEventGrid(filtered);
        }

        function resetEventFilters() {
            const time = document.getElementById('filter-event-waktu');
            const location = document.getElementById('filter-event-desa');
            if (time) time.value = 'ALL';
            if (location) location.value = 'ALL';
            renderEventGrid(eventList);
        }

        function renderEventGrid(dataToRender = eventList) {
            const container = document.getElementById('event-grid');
            const count = document.getElementById('event-count');
            const empty = document.getElementById('event-empty');
            if (!container) return;
            if (count) count.textContent = dataToRender.length;
            if (empty) empty.classList.toggle('hidden', dataToRender.length !== 0);
            if (dataToRender.length === 0) {
                container.innerHTML = '';
                return;
            }
            container.innerHTML = dataToRender.map(e => `
                <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${e.isBerlangsung ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}">${escapeHtml(e.status || 'Mendatang')}</span>
                            <span class="text-xs font-semibold text-slate-400"><i class="fa-solid fa-calendar mr-1"></i> ${escapeHtml(e.tanggalStr || '')}</span>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2">${escapeHtml(e.title || '')}</h3>
                        <p class="text-xs text-slate-500 mb-3">${escapeHtml(e.desc || '')}</p>
                    </div>
                    <div class="text-xs font-bold text-coastal-600"><i class="fa-solid fa-location-dot text-red-500 mr-1"></i> ${escapeHtml(e.lokasi || e.desa || e.area || '')}</div>
                </div>
            `).join('');
        }

        function renderPublicDamriView() {
            const container = document.getElementById('public-damri-container');
            const announcementBox = document.getElementById('damri-announcement-box');
            const announcementText = document.getElementById('damri-announcement-text');

            if (damriData.announcement && damriData.announcement.trim() !== "") {
                announcementText.innerText = damriData.announcement;
                announcementBox.classList.remove('hidden');
            } else {
                announcementBox.classList.add('hidden');
            }

            let routesHTML = damriData.routes.map(r => `
                <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-4 mb-4 gap-2">
                        <div>
                            <span class="text-xs font-bold text-coastal-600 bg-coastal-50 px-2.5 py-1 rounded">${escapeHtml(r.label || '')}</span>
                            <h3 class="text-lg font-bold text-slate-900 mt-1">${escapeHtml(r.nama || '')}</h3>
                        </div>
                        <span class="text-xl font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">${escapeHtml(r.tarif || '')} <span class="text-xs font-normal text-slate-500">/org</span></span>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <span class="block text-xs text-slate-400 font-semibold uppercase mb-1">Jadwal Keberangkatan Stasiun:</span>
                            <p class="font-bold text-slate-700">${escapeHtml(r.pergi || '')}</p>
                        </div>
                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <span class="block text-xs text-slate-400 font-semibold uppercase mb-1">Jadwal Kepulangan Pantai:</span>
                            <p class="font-bold text-slate-700">${escapeHtml(r.pulang || '')}</p>
                        </div>
                    </div>
                    
                    <div class="text-xs text-slate-600">
                        <p><i class="fa-solid fa-location-dot text-red-500 mr-1.5"></i> <strong>Titik Naik:</strong> ${escapeHtml(r.titik || '')}</p>
                        ${r.ticketInfo ? `<p class="mt-2"><i class="fa-solid fa-ticket text-emerald-600 mr-1.5"></i><strong>Info Tiket:</strong> ${escapeHtml(r.ticketInfo)}</p>` : ''}
                        ${r.ticketActive === false ? '' : (r.ticketUrl && /^https?:\/\//i.test(r.ticketUrl) ? `<a href="${escapeHtml(r.ticketUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex mt-3 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"><i class="fa-solid fa-ticket mr-2"></i>Pesan / Beli Tiket</a>` : `<span class="inline-flex mt-3 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold"><i class="fa-solid fa-ticket mr-2"></i>Informasi Tiket</span>`) }
                    </div>
                </div>
            `).join('');

            container.innerHTML = `
                <div class="lg:col-span-2 space-y-6">
                    <h2 class="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <i class="fa-solid fa-route text-coastal-500"></i> Daftar Rute & Jadwal DAMRI
                    </h2>
                    ${routesHTML}
                </div>

                <div class="space-y-6">
                    <div class="bg-amber-50 rounded-xl p-6 border border-amber-200">
                        <h3 class="font-bold text-amber-900 text-base mb-2 flex items-center gap-2">
                            <i class="fa-solid fa-circle-info text-amber-600"></i> Panduan Penumpang
                        </h3>
                        <ul class="text-xs text-amber-900 space-y-2 list-disc list-inside">
                            <li>Pemesanan tiket dapat dilakukan secara langsung di armada atau melalui aplikasi DAMRI Apps.</li>
                            <li>Disarankan tiba di titik keberangkatan minimal 15 menit sebelum jam operasional.</li>
                            <li>Armada dilengkapi AC, bagasi barang, dan seat nyaman kapasitas Mini Bus HiAce/Medium Bus.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
                        <div class="w-12 h-12 bg-coastal-100 text-coastal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <i class="fa-solid fa-headset text-xl"></i>
                        </div>
                        <h4 class="font-bold text-slate-900">Pusat Informasi DAMRI</h4>
                        <p class="text-xs text-slate-500 mt-1 mb-4">Layanan Pertanyaan Layanan & Armada KSPN Malang</p>
                        <a href="https://wa.me/${damriData.wa}" target="_blank" class="inline-block bg-nature-500 hover:bg-nature-600 text-white font-bold px-4 py-2 rounded-lg text-xs transition">
                            <i class="fa-brands fa-whatsapp mr-1 text-sm"></i> WhatsApp CS DAMRI
                        </a>
                    </div>
                </div>
            `;
        }

        function handleGlobalSearch(query) {
            const q = query.toLowerCase().trim();
            const suggestionsBox = document.getElementById('search-suggestions');
            const clearBtn = document.getElementById('clear-search-btn');

            if (q.length > 0) {
                clearBtn.classList.remove('hidden');
            } else {
                clearBtn.classList.add('hidden');
                suggestionsBox.classList.add('hidden');
                suggestionsBox.innerHTML = '';
                return;
            }

            const matchedWisata = wisataList.filter(w => 
                w.nama.toLowerCase().includes(q) || w.kecamatan.toLowerCase().includes(q)
            );

            const matchedUmkm = umkmList.filter(u => 
                u.nama.toLowerCase().includes(q) || u.kategori.toLowerCase().includes(q) || u.desc.toLowerCase().includes(q)
            );

            if (matchedWisata.length === 0 && matchedUmkm.length === 0) {
                suggestionsBox.innerHTML = `<div class="p-4 text-xs text-slate-400 text-center">Tidak ditemukan hasil untuk "${query}"</div>`;
                suggestionsBox.classList.remove('hidden');
                return;
            }

            let htmlContent = '';

            if (matchedWisata.length > 0) {
                htmlContent += `<div class="px-4 py-2 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b">Destinasi Wisata (${matchedWisata.length})</div>`;
                htmlContent += matchedWisata.map(w => `
                    <div onclick="selectSuggestionWisata('${w.id}')" class="flex items-center gap-3 px-4 py-2.5 hover:bg-coastal-50 cursor-pointer border-b border-slate-100 transition">
                        <img src="${w.img}" class="w-10 h-10 rounded-lg object-cover" onerror="this.src='https://placehold.co/100x100'">
                        <div class="flex-1">
                            <h4 class="text-xs font-bold text-slate-900">${w.nama}</h4>
                            <p class="text-[11px] text-slate-500">Kecamatan ${w.kecamatan}</p>
                        </div>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-400"></i>
                    </div>
                `).join('');
            }

            if (matchedUmkm.length > 0) {
                htmlContent += `<div class="px-4 py-2 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b">Produk UMKM (${matchedUmkm.length})</div>`;
                htmlContent += matchedUmkm.map(u => `
                    <div onclick="selectSuggestionUmkm('${u.id}')" class="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50 cursor-pointer border-b border-slate-100 transition">
                        <img src="${u.img}" class="w-10 h-10 rounded-lg object-cover" onerror="this.src='https://placehold.co/100x100'">
                        <div class="flex-1">
                            <h4 class="text-xs font-bold text-slate-900">${u.nama}</h4>
                            <p class="text-[11px] text-emerald-600">${u.kategori} • Desa ${u.desa}</p>
                        </div>
                        <i class="fa-solid fa-store text-xs text-emerald-500"></i>
                    </div>
                `).join('');
            }

            suggestionsBox.innerHTML = htmlContent;
            suggestionsBox.classList.remove('hidden');
        }

        function handleSearchKeydown(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const q = event.target.value.toLowerCase().trim();
                const suggestionsBox = document.getElementById('search-suggestions');
                suggestionsBox.classList.add('hidden');

                if (!q) return;

                const matchedUmkm = umkmList.filter(u => u.nama.toLowerCase().includes(q) || u.kategori.toLowerCase().includes(q) || u.desc.toLowerCase().includes(q));
                const matchedWisata = wisataList.filter(w => w.nama.toLowerCase().includes(q) || w.kecamatan.toLowerCase().includes(q));

                if (matchedUmkm.length > 0 && matchedWisata.length === 0) {
                    switchTab('umkm');
                    renderUmkmGrid(matchedUmkm);
                } else {
                    switchTab('wisata');
                    renderWisataGrid(matchedWisata);
                }
            }
        }

        function selectSuggestionWisata(id) {
            document.getElementById('search-suggestions').classList.add('hidden');
            switchTab('wisata');
            openWisataDetailModal(id);
        }

        function selectSuggestionUmkm(id) {
            document.getElementById('search-suggestions').classList.add('hidden');
            switchTab('umkm');
            const item = umkmList.find(u => u.id === id);
            if (item) {
                renderUmkmGrid([item]);
            }
        }

        function clearGlobalSearch() {
            const searchInput = document.getElementById('global-search');
            searchInput.value = '';
            document.getElementById('search-suggestions').classList.add('hidden');
            document.getElementById('clear-search-btn').classList.add('hidden');
            renderWisataGrid(wisataList);
            renderUmkmGrid(umkmList);
            searchInput.focus();
        }

        const DEFAULT_MANAGED_ACCOUNTS = [
            {id:'default-bantur', name:'Pengelola Bantur', username:'admin-bantur', password:'bantur123', role:'desa', area:'Bantur', active:true, locked:true},
            {id:'default-gedangan', name:'Pengelola Gedangan', username:'admin-gedangan', password:'gedangan123', role:'desa', area:'Gedangan', active:true, locked:true},
            {id:'default-donomulyo', name:'Pengelola Donomulyo', username:'admin-donomulyo', password:'donomulyo123', role:'desa', area:'Donomulyo', active:true, locked:true},
            {id:'default-sumbermanjing', name:'Pengelola Sumbermanjing Wetan', username:'admin-sumbermanjing', password:'sumber123', role:'desa', area:'Sumbermanjing Wetan', active:true, locked:true},
            {id:'default-tirtoyudo', name:'Pengelola Tirtoyudo', username:'admin-tirtoyudo', password:'tirtoyudo123', role:'desa', area:'Tirtoyudo', active:true, locked:true},
            {id:'default-damri', name:'Pengelola DAMRI', username:'damri', password:'damri123', role:'damri', area:'DAMRI', active:true, locked:true}
        ];
        function getManagedAccounts() {
            try { const saved = JSON.parse(localStorage.getItem('jms_managed_accounts') || 'null'); return Array.isArray(saved) ? saved : DEFAULT_MANAGED_ACCOUNTS.map(a=>({...a})); }
            catch(e) { return DEFAULT_MANAGED_ACCOUNTS.map(a=>({...a})); }
        }
        function storeManagedAccounts(list) { localStorage.setItem('jms_managed_accounts', JSON.stringify(list)); }
        function renderManagedAccounts() {
            const body = document.getElementById('managed-account-table'); if (!body) return;
            const accounts = getManagedAccounts();
            body.innerHTML = accounts.map(a => `<tr><td class="p-3 font-semibold">${escapeHtml(a.name)}</td><td class="p-3">${escapeHtml(a.username)}</td><td class="p-3 whitespace-nowrap"><span id="account-pass-${escapeHtml(a.id)}" data-visible="false">••••••••</span> <button type="button" onclick="toggleAccountPassword('${a.id}', this)" class="ml-1 text-sky-700 text-xs font-bold" aria-label="Tampilkan password">Lihat</button></td><td class="p-3">${a.role==='desa'?'Pengelola Desa':'Pengelola DAMRI'}</td><td class="p-3">${escapeHtml(a.area || '-')}</td><td class="p-3"><button onclick="toggleManagedAccount('${a.id}')" class="px-2 py-1 rounded text-xs font-bold ${a.active===false?'bg-red-100 text-red-700':'bg-emerald-100 text-emerald-700'}">${a.active===false?'Nonaktif':'Aktif'}</button></td><td class="p-3 whitespace-nowrap"><button onclick="editManagedAccount('${a.id}')" class="text-sky-700 mr-3" title="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>${a.locked?'<span class="text-slate-400 text-xs">Akun bawaan</span>':`<button onclick="deleteManagedAccount('${a.id}')" class="text-red-600" title="Hapus"><i class="fa-solid fa-trash"></i> Hapus</button>`}</td></tr>`).join('') || '<tr><td colspan="7" class="p-4 text-center text-slate-400">Belum ada akun.</td></tr>';
        }
        function toggleAccountPassword(id, button) { if(currentAdminRole!=='super') return; const account=getManagedAccounts().find(a=>a.id===id); const cell=document.getElementById('account-pass-'+id); if(!account||!cell) return; const visible=cell.dataset.visible==='true'; cell.textContent=visible?'••••••••':String(account.password||'(tidak tersimpan)'); cell.dataset.visible=visible?'false':'true'; button.textContent=visible?'Lihat':'Sembunyikan'; }
        function openAccountForm() { if(currentAdminRole!=='super') return; document.getElementById('account-form').classList.remove('hidden'); document.getElementById('account-form').reset(); document.getElementById('account-id').value=''; document.getElementById('account-password').required=true; document.getElementById('account-area-wrap').classList.remove('hidden'); }
        function closeAccountForm() { document.getElementById('account-form').classList.add('hidden'); }
        function editManagedAccount(id) { if(currentAdminRole!=='super') return; const a=getManagedAccounts().find(x=>x.id===id); if(!a) return; document.getElementById('account-form').classList.remove('hidden'); document.getElementById('account-id').value=a.id; document.getElementById('account-name').value=a.name; document.getElementById('account-username').value=a.username; document.getElementById('account-password').value=''; document.getElementById('account-password').required=false; document.getElementById('account-role').value=a.role; document.getElementById('account-area').value=a.area; document.getElementById('account-area-wrap').classList.toggle('hidden',a.role==='damri'); }
        function saveManagedAccount(e) { e.preventDefault(); if(currentAdminRole!=='super') return; const list=getManagedAccounts(); const id=document.getElementById('account-id').value; const username=document.getElementById('account-username').value.trim(); const old=list.find(a=>a.id===id); if(list.some(a=>a.username.toLowerCase()===username.toLowerCase()&&a.id!==id)){showToast('Username sudah digunakan.','error');return;} const role=document.getElementById('account-role').value; const password=document.getElementById('account-password').value; if(!old&&!password){showToast('Password wajib diisi untuk akun baru.','error');return;} const item={id:id||('account-'+Date.now()),name:document.getElementById('account-name').value.trim(),username,password:password||(old&&old.password)||'',role,area:role==='damri'?'DAMRI':document.getElementById('account-area').value,active:old?old.active!==false:true,locked:old?!!old.locked:false}; if(old){list[list.findIndex(a=>a.id===id)]=item;}else{list.push(item);} storeManagedAccounts(list); renderManagedAccounts(); closeAccountForm(); showToast('Akun berhasil disimpan.','success'); }
        function toggleManagedAccount(id) { if(currentAdminRole!=='super') return; const list=getManagedAccounts(); const a=list.find(x=>x.id===id); if(!a) return; if(a.username==='admin'){showToast('Akun Admin Utama tidak dapat dinonaktifkan.','error');return;} a.active=a.active===false; storeManagedAccounts(list); renderManagedAccounts(); showToast('Status akun diperbarui.','success'); }
        function deleteManagedAccount(id) { if(currentAdminRole!=='super') return; const list=getManagedAccounts(); const a=list.find(x=>x.id===id); if(!a||a.locked){showToast('Akun bawaan tidak dapat dihapus.','error');return;} if(!confirm('Hapus akun '+a.username+'?')) return; storeManagedAccounts(list.filter(x=>x.id!==id)); renderManagedAccounts(); showToast('Akun dihapus.','success'); }
        document.addEventListener('change', function(e){ if(e.target && e.target.id==='account-role'){document.getElementById('account-area-wrap').classList.toggle('hidden',e.target.value==='damri');} });

        function handleAdminLogin(e) {
            e.preventDefault();
            const u = document.getElementById('login-username').value.trim();
            const p = document.getElementById('login-password').value;
            if (u === 'admin' && p === 'admin123') {
                currentAdminRole='super'; currentAdminArea=null; setupAdminDashboard(); renderManagedAccounts();
                showToast('Berhasil masuk sebagai Admin Utama.','success'); return;
            }
            const account=getManagedAccounts().find(a=>a.username===u && a.password===p && a.active!==false);
            if(account && account.role==='desa') { currentAdminRole='desa'; currentAdminArea=account.area; setupAdminDashboard(); showToast('Berhasil masuk sebagai Pengelola '+currentAdminArea+'!','success'); }
            else if(account && account.role==='damri') { currentAdminRole='damri'; currentAdminArea='DAMRI'; setupAdminDashboard(); showToast('Berhasil masuk sebagai Pengelola Bus DAMRI!','success'); }
            else { showToast('Username/password salah atau akun dinonaktifkan!','error'); }
        }

        function setupAdminDashboard() {
            document.getElementById('admin-login-card').classList.add('hidden');
            document.getElementById('admin-dashboard').classList.remove('hidden');

            const navContainer = document.getElementById('admin-nav-tabs');
            const roleTitle = document.getElementById('admin-role-title');
            const userDisplay = document.getElementById('admin-user-display');
            const avatarIcon = document.getElementById('admin-avatar-icon');

            if (currentAdminRole === 'super') {
                roleTitle.innerText = 'Dashboard Admin Utama';
                userDisplay.innerText = 'Admin Utama — Akses Semua Wilayah';
                avatarIcon.className = 'w-12 h-12 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center font-bold text-xl';
                avatarIcon.innerHTML = '<i class="fa-solid fa-shield-halved"></i>';
                navContainer.innerHTML = `
                    <button onclick="switchAdminTab('traffic')" id="adm-tab-traffic" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">Info Lalu Lintas</button>
                    <button onclick="switchAdminTab('wisata')" id="adm-tab-wisata" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">Kelola Wisata</button>
                    <button onclick="switchAdminTab('umkm')" id="adm-tab-umkm" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">Kelola UMKM</button>
                    <button onclick="switchAdminTab('resort')" id="adm-tab-resort" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">Kelola Resort</button>
                    <button onclick="switchAdminTab('event')" id="adm-tab-event" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">Kelola Event</button>
                    <button onclick="switchAdminTab('kategori')" id="adm-tab-kategori" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">Kategori</button>
                    <button onclick="switchAdminTab('damri-alert')" id="adm-tab-damri-alert" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">DAMRI</button>
                    <button onclick="switchAdminTab('akun')" id="adm-tab-akun" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors">Kelola Akun</button>
                    <button onclick="switchAdminTab('promoberanda')" id="adm-tab-promoberanda" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors"><i class="fa-solid fa-rectangle-ad mr-1"></i> Promo Beranda</button>
                    <button onclick="switchAdminTab('kecamatan')" id="adm-tab-kecamatan" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors"><i class="fa-solid fa-map-location-dot mr-1"></i> Kecamatan</button>
                    <button onclick="switchAdminTab('navsettings')" id="adm-tab-navsettings" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors"><i class="fa-solid fa-sliders mr-1"></i>Pengaturan Navigasi</button>
                    <button onclick="switchAdminTab('footersettings')" id="adm-tab-footersettings" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors"><i class="fa-solid fa-shoe-prints mr-1"></i>Pengaturan Footer</button>
                    <button onclick="switchAdminTab('logosettings')" id="adm-tab-logosettings" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors"><i class="fa-solid fa-image mr-1"></i>Pengaturan Logo</button>
                    <button onclick="switchAdminTab('backgroundsettings')" id="adm-tab-backgroundsettings" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors"><i class="fa-solid fa-panorama mr-1"></i>Pengaturan Background</button>
                    <button onclick="switchAdminTab('scraper')" id="adm-tab-scraper" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-950 whitespace-nowrap cursor-pointer transition-colors"><i class="fa-solid fa-spider mr-1"></i>Web Scraper</button>`;
                document.getElementById('admin-content-traffic').classList.remove('hidden');
                document.getElementById('admin-content-kategori').classList.remove('hidden');
                document.getElementById('admin-content-damri-alert').classList.remove('hidden');
                document.getElementById('admin-content-damri-routes').classList.remove('hidden');
                renderAdminTables(); renderAdminResortsTable(); renderAdminEventsTable(); renderAdminRoadClosuresTable(); renderAdminAlternativeRoutesTable(); renderAdminDamriRoutesTable(); renderManagedAccounts();
                renderAdminNavSettings(); applyAdminNavSettings(); renderFooterSettingsForm(); applyFooterSettings();
                switchAdminTab('akun');
            } else if (currentAdminRole === 'desa') {
                roleTitle.innerText = "Dashboard Pengelola Desa — " + currentAdminArea;
                userDisplay.innerText = "Pengelola Wilayah: " + currentAdminArea;
                avatarIcon.className = "w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl";
                avatarIcon.innerHTML = `<i class="fa-solid fa-user-check"></i>`;

                navContainer.innerHTML = `
                    <button onclick="switchAdminTab('wisata')" id="adm-tab-wisata" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-coastal-500 text-coastal-600 whitespace-nowrap cursor-pointer">
                        <i class="fa-solid fa-umbrella-beach mr-1.5"></i> Kelola Wisata ${currentAdminArea}
                    </button>
                    <button onclick="switchAdminTab('umkm')" id="adm-tab-umkm" class="admin-tab-btn py-3 px-4 text-sm font-bold text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap cursor-pointer">
                        <i class="fa-solid fa-store mr-1.5"></i> Kelola UMKM ${currentAdminArea}
                    </button>
                    <button onclick="switchAdminTab('resort')" id="adm-tab-resort" class="admin-tab-btn py-3 px-4 text-sm font-bold text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap cursor-pointer">
                        <i class="fa-solid fa-hotel mr-1.5"></i> Kelola Resort ${currentAdminArea}
                    </button>
                    <button onclick="switchAdminTab('event')" id="adm-tab-event" class="admin-tab-btn py-3 px-4 text-sm font-bold text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap cursor-pointer">
                        <i class="fa-solid fa-calendar-plus mr-1.5"></i> Kelola Event ${currentAdminArea}
                    </button>
                    <button onclick="switchAdminTab('traffic')" id="adm-tab-traffic" class="admin-tab-btn py-3 px-4 text-sm font-bold text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap cursor-pointer">
                        <i class="fa-solid fa-road mr-1.5"></i> Info Lalu Lintas ${currentAdminArea}
                    </button>
                `;
                // Pengelola desa hanya melihat dan mengelola data wilayah akunnya.
                document.getElementById('traffic-banner-settings-card').classList.add('hidden');
                document.getElementById('admin-content-kategori').classList.add('hidden');
                renderAdminTables();
                document.getElementById('admin-resort-area-note').innerText = `Anda hanya dapat menambah dan mengelola resort di wilayah ${currentAdminArea}.`;
                renderAdminResortsTable();
                document.getElementById('admin-event-area-note').innerText = `Event yang ditambahkan akan ditandai sebagai wilayah ${currentAdminArea}. Anda hanya dapat mengelola event dari wilayah ini.`;
                document.getElementById('admin-event-area-title').innerText = currentAdminArea;
                renderAdminEventsTable();
                document.getElementById('admin-road-area-label').innerText = currentAdminArea;
                document.getElementById('admin-road-area-title').innerText = currentAdminArea;
                renderAdminRoadClosuresTable();
                document.getElementById('admin-route-area-label').innerText = currentAdminArea;
                document.getElementById('admin-route-area-title').innerText = currentAdminArea;
                renderAdminAlternativeRoutesTable();
                switchAdminTab('traffic');

            } else if (currentAdminRole === 'damri') {
                roleTitle.innerText = "Dashboard Pengelola Bus DAMRI";
                userDisplay.innerText = "Administrator DAMRI KSPN";
                avatarIcon.className = "w-12 h-12 bg-coastal-100 text-coastal-600 rounded-xl flex items-center justify-center font-bold text-xl";
                avatarIcon.innerHTML = `<i class="fa-solid fa-bus"></i>`;

                navContainer.innerHTML = `
                    <button onclick="switchAdminTab('damri-alert')" id="adm-tab-damri-alert" class="admin-tab-btn py-3 px-4 text-sm font-bold border-b-2 border-coastal-500 text-coastal-600 whitespace-nowrap cursor-pointer">
                        <i class="fa-solid fa-bullhorn mr-1.5"></i> Pemberitahuan & Alert DAMRI
                    </button>
                    <button onclick="switchAdminTab('damri-routes')" id="adm-tab-damri-routes" class="admin-tab-btn py-3 px-4 text-sm font-bold text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap cursor-pointer">
                        <i class="fa-solid fa-route mr-1.5"></i> Kelola Rute DAMRI
                    </button>
                `;

                document.getElementById('adm-damri-announcement-input').value = damriData.announcement || "";
                document.getElementById('adm-damri-wa').value = damriData.wa;
                renderAdminDamriRoutesTable();
                switchAdminTab('damri-alert');
            }
        }

        function renderAdminRoadClosuresTable() {
            const body = document.getElementById('admin-roadclosure-table');
            if (!body) return;
            const rows = currentAdminRole === 'super' ? roadClosureList : roadClosureList.filter(item => item.area === currentAdminArea);
            body.innerHTML = rows.length ? rows.map(item => `
                <tr class="hover:bg-slate-50"><td class="p-4"><div class="font-bold text-slate-900">${escapeHtml(item.title)}</div><div class="text-xs text-slate-500">${escapeHtml(item.road)}</div></td><td class="p-4">${escapeHtml(item.time)}</td><td class="p-4 max-w-md whitespace-normal">${escapeHtml(item.detail)}</td><td class="p-4 text-center whitespace-nowrap"><button type="button" onclick="editRoadClosure('${item.id}')" class="p-1.5 text-coastal-600 hover:bg-coastal-50 rounded"><i class="fa-solid fa-pen-to-square"></i> Edit</button> <button type="button" onclick="deleteRoadClosure('${item.id}')" class="p-1.5 text-red-600 hover:bg-red-50 rounded"><i class="fa-solid fa-trash"></i> Hapus</button></td></tr>`).join('') : `<tr><td colspan="4" class="p-6 text-center text-slate-400">Belum ada informasi penutupan jalan di wilayah ${escapeHtml(currentAdminArea || '')}.</td></tr>`;
        }

        function escapeHtml(value) {
            return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
        }

        function renderAdminAlternativeRoutesTable() {
            const tbody = document.getElementById('admin-route-detail-table');
            if (!tbody) return;
            const rows = (currentAdminRole === 'super' ? roadClosureList : roadClosureList.filter(item => item && item.area === currentAdminArea));
            tbody.innerHTML = rows.length ? rows.map(item => `
                <tr class="hover:bg-slate-50">
                    <td class="p-4"><div class="font-bold text-slate-900">${escapeHtml(item.title || '')}</div><div class="text-xs text-slate-500">${escapeHtml(item.road || '')}</div></td>
                    <td class="p-4">${escapeHtml(item.time || '')}</td>
                    <td class="p-4 max-w-xl whitespace-normal leading-relaxed">${escapeHtml(item.detail || 'Belum ada detail rute alternatif.')}</td>
                    <td class="p-4 text-center"><button type="button" onclick="editRoadClosure('${item.id}')" class="p-1.5 text-coastal-600 hover:bg-coastal-50 rounded"><i class="fa-solid fa-pen-to-square"></i> Edit</button></td>
                </tr>`).join('') : `<tr><td colspan="4" class="p-6 text-center text-slate-400">Belum ada detail rute alternatif untuk wilayah ${escapeHtml(currentAdminArea || '')}.</td></tr>`;
        }

        function openRoadClosureModal() {
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole==='desa' && !currentAdminArea)) { showToast('Akses ditolak.', 'error'); return; }
            document.getElementById('modal-roadclosure-title').innerText = 'Tambah Informasi Penutupan Jalan';
            document.getElementById('modal-roadclosure-area').innerText = currentAdminRole === 'super' ? 'Pilih kecamatan' : currentAdminArea;
            document.getElementById('roadclosure-super-area-wrap').classList.toggle('hidden', currentAdminRole !== 'super');
            if (currentAdminRole === 'super') document.getElementById('form-roadclosure-area-select').value = 'Bantur';
            document.getElementById('form-roadclosure-id').value = '';
            document.getElementById('form-roadclosure-title').value = '';
            document.getElementById('form-roadclosure-road').value = '';
            document.getElementById('form-roadclosure-time').value = '';
            document.getElementById('form-roadclosure-detail').value = '';
            document.getElementById('btn-save-roadclosure').innerText = 'Simpan Informasi';
            openModal('modal-roadclosure-form');
        }

        function saveRoadClosure(e) {
            e.preventDefault();
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && !currentAdminArea)) { showToast('Akses ditolak.', 'error'); return; }
            const id = document.getElementById('form-roadclosure-id').value;
            const existing = id ? roadClosureList.find(item => item.id === id) : null;
            if (id && (!existing || (currentAdminRole === 'desa' && existing.area !== currentAdminArea))) { showToast('Akses ditolak. Informasi ini bukan milik wilayah Anda.', 'error'); return; }
            const targetArea = currentAdminRole === 'super' ? document.getElementById('form-roadclosure-area-select').value : currentAdminArea;
            const item = { id: id || ('jalan-' + Date.now()), area: targetArea, title: document.getElementById('form-roadclosure-title').value.trim(), road: document.getElementById('form-roadclosure-road').value.trim(), time: document.getElementById('form-roadclosure-time').value.trim(), detail: document.getElementById('form-roadclosure-detail').value.trim(), updatedAt: new Date().toISOString() };
            if (!item.title || !item.road || !item.time || !item.detail) { showToast('Lengkapi semua informasi penutupan jalan.', 'error'); return; }
            if (existing) roadClosureList = roadClosureList.map(old => old.id === id && (currentAdminRole === 'super' || old.area === currentAdminArea) ? item : old); else roadClosureList.push(item);
            saveState(); renderAdminRoadClosuresTable(); renderAdminAlternativeRoutesTable(); renderTrafficRunningText(); closeModal('modal-roadclosure-form');
            showToast(existing ? 'Informasi penutupan jalan diperbarui.' : 'Informasi penutupan jalan berhasil ditambahkan.', 'success');
        }

        function editRoadClosure(id) {
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && !currentAdminArea)) return;
            const item = roadClosureList.find(row => row.id === id);
            if (!item || (currentAdminRole === 'desa' && item.area !== currentAdminArea)) { showToast('Akses ditolak. Informasi ini bukan milik wilayah Anda.', 'error'); return; }
            document.getElementById('modal-roadclosure-title').innerText = 'Edit Informasi Penutupan Jalan';
            document.getElementById('modal-roadclosure-area').innerText = item.area || currentAdminArea || 'Wilayah belum ditentukan';
            document.getElementById('roadclosure-super-area-wrap').classList.toggle('hidden', currentAdminRole !== 'super');
            if (currentAdminRole === 'super') document.getElementById('form-roadclosure-area-select').value = item.area || 'Bantur';
            document.getElementById('form-roadclosure-id').value = item.id;
            document.getElementById('form-roadclosure-title').value = item.title || '';
            document.getElementById('form-roadclosure-road').value = item.road || '';
            document.getElementById('form-roadclosure-time').value = item.time || '';
            document.getElementById('form-roadclosure-detail').value = item.detail || '';
            document.getElementById('btn-save-roadclosure').innerText = 'Simpan Perubahan';
            openModal('modal-roadclosure-form');
        }

        function deleteRoadClosure(id) {
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && !currentAdminArea)) return;
            const item = roadClosureList.find(row => row.id === id);
            if (!item || (currentAdminRole === 'desa' && item.area !== currentAdminArea)) { showToast('Akses ditolak. Informasi ini bukan milik wilayah Anda.', 'error'); return; }
            if (!confirm('Hapus informasi penutupan jalan dari wilayah ' + item.area + '?')) return;
            roadClosureList = roadClosureList.filter(row => row.id !== id);
            saveState(); renderAdminRoadClosuresTable(); renderAdminAlternativeRoutesTable(); renderTrafficRunningText(); showToast('Informasi penutupan jalan berhasil dihapus.', 'success');
        }

        function renderAdminEventsTable() {
            const body = document.getElementById('admin-event-table');
            if (!body) return;
            const rows = currentAdminRole === 'super' ? eventList : eventList.filter(ev => ev.area === currentAdminArea);
            body.innerHTML = rows.length ? rows.map(ev => `
                <tr class="hover:bg-slate-50">
                    <td class="p-4 font-bold text-slate-900">${ev.title}</td>
                    <td class="p-4">${ev.tanggalStr || ''}</td>
                    <td class="p-4"><div>${ev.desa || ''}</div><div class="text-xs text-slate-500">${ev.lokasi || ''}</div></td>
                    <td class="p-4 text-center whitespace-nowrap">
                        <button type="button" onclick="editVillageEvent('${ev.id}')" class="p-1.5 text-coastal-600 hover:bg-coastal-50 rounded" title="Edit event"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                        <button type="button" onclick="deleteVillageEvent('${ev.id}')" class="p-1.5 text-red-600 hover:bg-red-50 rounded" title="Hapus event"><i class="fa-solid fa-trash"></i> Hapus</button>
                    </td>
                </tr>`).join('') : `<tr><td colspan="4" class="p-6 text-center text-slate-400">Belum ada event di wilayah ${currentAdminArea}.</td></tr>`;
        }

        function openVillageEventModal() {
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && !currentAdminArea)) {
                showToast('Akses ditolak.', 'error');
                return;
            }
            document.getElementById('modal-event-form-title').innerText = 'Tambah Event Baru';
            document.getElementById('modal-event-area-label').innerText = currentAdminRole === 'super' ? 'Pilih kecamatan' : currentAdminArea;
            document.getElementById('event-super-area-wrap').classList.toggle('hidden', currentAdminRole !== 'super');
            if (currentAdminRole === 'super') document.getElementById('form-event-area-select').value = 'Bantur';
            document.getElementById('form-event-id').value = '';
            document.getElementById('form-event-title').value = '';
            document.getElementById('form-event-date').value = '';
            document.getElementById('form-event-desa').value = '';
            document.getElementById('form-event-lokasi').value = '';
            document.getElementById('form-event-desc').value = '';
            document.getElementById('btn-save-village-event').innerHTML = '<i class="fa-solid fa-plus mr-1"></i> Tambahkan Event';
            openModal('modal-admin-event-form');
        }

        function saveVillageEvent(e) {
            e.preventDefault();
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && !currentAdminArea)) {
                showToast('Akses ditolak.', 'error');
                return;
            }
            const eventId = document.getElementById('form-event-id').value;
            const existing = eventId ? eventList.find(ev => ev.id === eventId) : null;
            if (eventId && (!existing || (currentAdminRole === 'desa' && existing.area !== currentAdminArea))) {
                showToast('Akses ditolak. Event ini bukan milik wilayah Anda.', 'error');
                return;
            }
            const targetArea = currentAdminRole === 'super' ? document.getElementById('form-event-area-select').value : currentAdminArea;
            const dateValue = document.getElementById('form-event-date').value;
            const dateObj = new Date(dateValue + 'T00:00:00');
            const tanggalStr = dateObj.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
            const today = new Date(); today.setHours(0,0,0,0);
            const isBerlangsung = dateObj.getTime() === today.getTime();
            const newEvent = {
                id: eventId || ('ev_' + Date.now() + '_' + Math.random().toString(36).slice(2,7)),
                title: document.getElementById('form-event-title').value.trim(),
                dateISO: dateValue,
                tanggalStr,
                dateObj,
                desa: document.getElementById('form-event-desa').value.trim(),
                lokasi: document.getElementById('form-event-lokasi').value.trim(),
                desc: document.getElementById('form-event-desc').value.trim(),
                area: targetArea,
                status: dateObj.getTime() === today.getTime() ? 'Hari Ini' : (dateObj < today ? 'Selesai' : 'Mendatang'),
                isBerlangsung
            };
            if (eventId) {
                eventList = eventList.map(ev => ev.id === eventId ? newEvent : ev);
            } else {
                // Setiap penyimpanan baru menambahkan event tersendiri, bukan menimpa event sebelumnya.
                eventList.unshift(newEvent);
            }
            saveState();
            renderEventGrid();
            renderAdminEventsTable();
            closeModal('modal-admin-event-form');
            showToast(eventId ? 'Event berhasil diperbarui.' : `Event berhasil ditambahkan untuk wilayah ${targetArea}.`, 'success');
        }

        function editVillageEvent(id) {
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && !currentAdminArea)) return;
            const ev = eventList.find(item => item.id === id);
            if (!ev || (currentAdminRole === 'desa' && ev.area !== currentAdminArea)) {
                showToast('Akses ditolak. Event ini bukan milik wilayah Anda.', 'error');
                return;
            }
            document.getElementById('modal-event-form-title').innerText = 'Edit Event';
            document.getElementById('modal-event-area-label').innerText = ev.area || currentAdminArea || 'Wilayah belum ditentukan';
            document.getElementById('event-super-area-wrap').classList.toggle('hidden', currentAdminRole !== 'super');
            if (currentAdminRole === 'super') document.getElementById('form-event-area-select').value = ev.area || 'Bantur';
            document.getElementById('form-event-id').value = ev.id;
            document.getElementById('form-event-title').value = ev.title || '';
            document.getElementById('form-event-date').value = ev.dateISO || (ev.dateObj instanceof Date ? ev.dateObj.toISOString().slice(0,10) : String(ev.dateObj || '').slice(0,10));
            document.getElementById('form-event-desa').value = ev.desa || '';
            document.getElementById('form-event-lokasi').value = ev.lokasi || '';
            document.getElementById('form-event-desc').value = ev.desc || '';
            document.getElementById('btn-save-village-event').innerHTML = '<i class="fa-solid fa-floppy-disk mr-1"></i> Simpan Perubahan';
            openModal('modal-admin-event-form');
        }

        function deleteVillageEvent(id) {
            if (!['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && !currentAdminArea)) return;
            const item = eventList.find(ev => ev.id === id);
            if (!item || (currentAdminRole === 'desa' && item.area !== currentAdminArea)) {
                showToast('Akses ditolak. Event ini bukan milik wilayah Anda.', 'error');
                return;
            }
            if (!confirm('Hapus event dari wilayah ' + item.area + '?')) return;
            eventList = eventList.filter(ev => ev.id !== id);
            saveState();
            renderAdminEventsTable();
            renderEventGrid();
            showToast('Event wilayah berhasil dihapus.', 'success');
        }

        function handleAdminLogout() {
            currentAdminRole = null;
            document.getElementById('admin-login-card').classList.remove('hidden');
            document.getElementById('admin-dashboard').classList.add('hidden');
            showToast("Anda telah keluar dari sesi admin.", "info");
        }

        function togglePasswordVisibility() {
            const p = document.getElementById('login-password');
            p.type = p.type === 'password' ? 'text' : 'password';
        }

        const FOOTER_DEFAULTS = {
            brand: 'Jelajah Malang Selatan',
            description: 'Platform digital integrasi pariwisata pesisir selatan Kabupaten Malang. Mendorong digitalisasi desa wisata dan penguatan UMKM lokal.',
            navTitle: 'Navigasi Portal', areaTitle: 'Kecamatan Pesisir', emergencyTitle: 'Layanan Darurat', year: String(new Date().getFullYear()),
            navLinks: "Beranda Utama|beranda\nWisata Pantai & Desa|wisata\nKatalog Produk UMKM|umkm\nAgenda Event Budaya|event\nInformasi Bus DAMRI|damri",
            areas: 'Kecamatan Bantur\nKecamatan Gedangan\nKecamatan Donomulyo\nKecamatan Sumbermanjing Wetan\nKecamatan Tirtoyudo',
            emergency: 'Kontak Layanan: 0822-3011-0110\nNomor Darurat Polisi: 110\nUntuk keadaan darurat, hubungi layanan terkait di wilayah setempat.',
            bottomText: 'Jelajah Malang Selatan – Portal Wisata Terpadu. Seluruh hak cipta dilindungi.',
            bgColor: '#104e70', headingColor: '#f59e0b'
        };
        function getFooterSettings() {
            let saved = {};
            try {
                saved = JSON.parse(localStorage.getItem('jms_footer_settings') || '{}') || {};
            } catch (_) {
                saved = {};
            }
            const cfg = { ...FOOTER_DEFAULTS, ...saved };
            // Nilai kosong yang tersimpan tidak boleh mengosongkan kolom footer.
            ['brand', 'description', 'navTitle', 'areaTitle', 'emergencyTitle',
             'year', 'navLinks', 'areas', 'emergency', 'bottomText', 'bgColor', 'headingColor']
                .forEach(key => {
                    if (cfg[key] == null || String(cfg[key]).trim() === '') cfg[key] = FOOTER_DEFAULTS[key];
                });
            return cfg;
        }
        function renderFooterSettingsForm() {
            const cfg = getFooterSettings();
            const map = { 'footer-brand':'brand', 'footer-description':'description', 'footer-nav-title':'navTitle', 'footer-area-title':'areaTitle', 'footer-emergency-title':'emergencyTitle', 'footer-copyright-year':'year', 'footer-nav-links':'navLinks', 'footer-areas':'areas', 'footer-emergency':'emergency', 'footer-bottom-text':'bottomText', 'footer-bg-color':'bgColor', 'footer-heading-color':'headingColor' };
            Object.entries(map).forEach(([id,key]) => { const el=document.getElementById(id); if(el) el.value=cfg[key] ?? ''; });
        }
        function applyFooterSettings() {
            const cfg = getFooterSettings();
            const setText = (id, value) => { const el=document.getElementById(id); if(el) el.textContent=value; };
            setText('footer-brand-display', cfg.brand); setText('footer-description-display', cfg.description);
            setText('footer-nav-title-display', cfg.navTitle); setText('footer-area-title-display', cfg.areaTitle); setText('footer-emergency-title-display', cfg.emergencyTitle);
            const navList=document.getElementById('footer-nav-links-display');
            if(navList) {
                navList.replaceChildren();
                String(cfg.navLinks || '').split('\n').map(line=>line.trim()).filter(Boolean).forEach(line=>{
                    const parts=line.split('|'); const label=(parts.shift()||'').trim(); const tab=(parts.join('|')||'beranda').trim();
                    if(!label) return;
                    const li=document.createElement('li'); const a=document.createElement('a');
                    a.href='javascript:void(0)'; a.className='hover:text-white transition'; a.textContent=label;
                    const allowed=['beranda','wisata','umkm','event','damri'];
                    if(allowed.includes(tab)) a.addEventListener('click',()=>switchTab(tab)); else a.addEventListener('click',()=>showToast('Tab tujuan tidak dikenali. Gunakan beranda, wisata, umkm, event, atau damri.','error'));
                    li.appendChild(a); navList.appendChild(li);
                });
            }
            const areaList=document.getElementById('footer-areas-display');
            if(areaList) { areaList.replaceChildren(); String(cfg.areas||'').split('\n').map(x=>x.trim()).filter(Boolean).forEach(label=>{const li=document.createElement('li');li.textContent=label;areaList.appendChild(li);}); }
            const emergency=document.getElementById('footer-emergency-display');
            if(emergency) { emergency.replaceChildren(); String(cfg.emergency||'').split('\n').map(x=>x.trim()).filter(Boolean).forEach((line,i)=>{const p=document.createElement('p');p.className=i===2?'pt-2 text-[11px] text-coastal-100 font-light':'';p.textContent=line;emergency.appendChild(p);}); }
            setText('footer-bottom-display', `© ${cfg.year || new Date().getFullYear()} ${cfg.bottomText || FOOTER_DEFAULTS.bottomText}`);
            const footer=document.getElementById('website-footer');
            if(footer) footer.style.backgroundColor=cfg.bgColor || FOOTER_DEFAULTS.bgColor;
            document.querySelectorAll('.footer-heading').forEach(el=>el.style.color=cfg.headingColor || FOOTER_DEFAULTS.headingColor);
        }
        function saveFooterSettings(event) {
            if(event) event.preventDefault();
            if(currentAdminRole !== 'super') { showToast('Hanya Admin Utama yang dapat mengubah footer.','error'); return; }
            const val=id=>document.getElementById(id)?.value?.trim() ?? '';
            const cfg={ brand:val('footer-brand'), description:val('footer-description'), navTitle:val('footer-nav-title'), areaTitle:val('footer-area-title'), emergencyTitle:val('footer-emergency-title'), year:val('footer-copyright-year'), navLinks:val('footer-nav-links'), areas:val('footer-areas'), emergency:val('footer-emergency'), bottomText:val('footer-bottom-text'), bgColor:val('footer-bg-color'), headingColor:val('footer-heading-color') };
            if(!cfg.brand || !cfg.description || !cfg.navTitle || !cfg.areaTitle || !cfg.emergencyTitle || !cfg.year || !cfg.bottomText) { showToast('Lengkapi kolom yang wajib diisi.','error'); return; }
            localStorage.setItem('jms_footer_settings', JSON.stringify(cfg)); applyFooterSettings(); showToast('Pengaturan footer berhasil disimpan.','success');
        }
        function resetFooterSettings() {
            if(currentAdminRole !== 'super') { showToast('Hanya Admin Utama yang dapat mengubah footer.','error'); return; }
            localStorage.removeItem('jms_footer_settings'); renderFooterSettingsForm(); applyFooterSettings(); showToast('Footer dikembalikan ke pengaturan default.','success');
        }

        const ADMIN_NAV_DEFAULTS = {
            traffic: true, wisata: true, umkm: true, event: true,
            kategori: true, 'damri-alert': true, akun: true, footersettings: true, logosettings: true, backgroundsettings: true, scraper: true
        };
        const ADMIN_NAV_LABELS = {
            traffic: 'Info Lalu Lintas (termasuk penutupan jalan & rute alternatif)',
            wisata: 'Kelola Wisata', umkm: 'Kelola UMKM', event: 'Kelola Event',
            kategori: 'Kategori', 'damri-alert': 'DAMRI', akun: 'Kelola Akun', footersettings: 'Pengaturan Footer Website', logosettings: 'Pengaturan Logo Website', backgroundsettings: 'Pengaturan Background Beranda & UMKM', scraper: 'Web Scraper / Pengambilan Data Website'
        };
        function getAdminNavSettings() {
            try { return { ...ADMIN_NAV_DEFAULTS, ...(JSON.parse(localStorage.getItem('jms_admin_nav_settings') || '{}')) }; }
            catch (_) { return { ...ADMIN_NAV_DEFAULTS }; }
        }
        function renderAdminNavSettings() {
            const list = document.getElementById('admin-nav-settings-list');
            if (!list) return;
            const settings = getAdminNavSettings();
            list.innerHTML = Object.entries(ADMIN_NAV_LABELS).map(([key, label]) => `
                <label class="flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 cursor-pointer">
                    <input type="checkbox" class="admin-nav-setting-checkbox mt-1 h-4 w-4 accent-blue-600" data-nav-key="${key}" ${settings[key] ? 'checked' : ''}>
                    <span><span class="block text-sm font-bold text-slate-800">${label}</span><span class="block text-xs text-slate-500 mt-1">Tampilkan menu ini pada navigasi dashboard.</span></span>
                </label>`).join('');
        }
        function applyAdminNavSettings() {
            if (currentAdminRole !== 'super') return;
            const settings = getAdminNavSettings();
            Object.keys(ADMIN_NAV_LABELS).forEach(key => {
                const button = document.getElementById(`adm-tab-${key}`);
                if (button) button.classList.toggle('hidden', settings[key] === false);
            });
            // Menu Pengaturan Navigasi selalu tersedia agar menu tersembunyi dapat dipulihkan.
            document.getElementById('adm-tab-navsettings')?.classList.remove('hidden');
        }
        function saveAdminNavSettings() {
            if (currentAdminRole !== 'super') { showToast('Hanya Admin Utama yang dapat mengatur navigasi.', 'error'); return; }
            const settings = { ...ADMIN_NAV_DEFAULTS };
            document.querySelectorAll('.admin-nav-setting-checkbox').forEach(input => { settings[input.dataset.navKey] = input.checked; });
            settings['navsettings'] = true;
            localStorage.setItem('jms_admin_nav_settings', JSON.stringify(settings));
            applyAdminNavSettings();
            showToast('Pengaturan navigasi berhasil disimpan.', 'success');
        }
        function resetAdminNavSettings() {
            if (currentAdminRole !== 'super') return;
            localStorage.removeItem('jms_admin_nav_settings');
            renderAdminNavSettings();
            applyAdminNavSettings();
            showToast('Navigasi dikembalikan ke pengaturan default.', 'success');
        }

        function switchAdminTab(tabName) {
            // Semua tab dibuat netral terlebih dahulu; tab aktif berwarna hitam
            // dengan garis bawah biru agar posisi menu yang dipilih mudah terlihat.
            document.querySelectorAll('#admin-nav-tabs .admin-tab-btn').forEach(t => {
                t.classList.remove('border-blue-600', 'text-slate-950', 'text-coastal-600', 'border-coastal-500');
                t.classList.add('border-b-2', 'border-transparent', 'text-slate-500');
                t.setAttribute('aria-selected', 'false');
            });
            const btn = document.getElementById(`adm-tab-${tabName}`);
            if (btn) {
                btn.classList.remove('border-transparent', 'text-slate-500', 'text-coastal-600', 'border-coastal-500');
                btn.classList.add('border-b-2', 'border-blue-600', 'text-slate-950');
                btn.setAttribute('aria-selected', 'true');
            }

            document.querySelectorAll('.admin-subview').forEach(v => v.classList.add('hidden'));
            if (tabName === 'traffic') {
                // Info Lalu Lintas menyatukan penutupan jalan dan detail rute alternatif.
                if (currentAdminRole === 'super') document.getElementById('admin-content-traffic')?.classList.remove('hidden');
                document.getElementById('admin-content-roadclosure')?.classList.remove('hidden');
                // Kolom rute alternatif sudah tersedia di tabel penutupan jalan, jadi tidak perlu tab terpisah.
                renderAdminRoadClosuresTable();
                renderTrafficRunningText();
            } else {
                const content = document.getElementById(`admin-content-${tabName}`);
                if (content) content.classList.remove('hidden');
            }
            if (tabName === 'navsettings') renderAdminNavSettings();
            if (tabName === 'footersettings') renderFooterSettingsForm();
            if (tabName === 'logosettings') loadWebsiteLogoPreview();
            if (tabName === 'backgroundsettings') { loadSectionBackgroundSettings(); loadBannerContentSettings(); }
            if (tabName === 'scraper') loadSavedScraperResults();
            if (tabName === 'resort') renderAdminResortsTable();
            if (tabName === 'kecamatan') renderAdminKecamatanTable();
        }

        function renderAdminTables() {
            const wilayahWisata = currentAdminRole === 'desa' && currentAdminArea ? wisataList.filter(w => w.kecamatan === currentAdminArea) : wisataList;
            const wilayahUmkm = currentAdminRole === 'desa' && currentAdminArea ? umkmList.filter(u => String(u.desa || '').toLowerCase().includes(currentAdminArea.toLowerCase())) : umkmList;
            document.getElementById('admin-wisata-table').innerHTML = wilayahWisata.map(w => `
                <tr class="hover:bg-slate-50">
                    <td class="p-4 font-bold text-slate-900">${w.nama}</td>
                    <td class="p-4">${w.kecamatan}</td>
                    <td class="p-4">${w.harga}</td>
                    <td class="p-4 text-center">
                        <button onclick="toggleUnggulan('${w.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 mx-auto cursor-pointer ${w.isUnggulan ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}">
                            <i class="fa-solid fa-star ${w.isUnggulan ? 'text-amber-500' : 'text-slate-300'}"></i>
                            ${w.isUnggulan ? 'Unggulan (ON)' : 'Biasa (OFF)'}
                        </button>
                    </td>
                    <td class="p-4 text-center space-x-2">
                        <button onclick="editWisataModal('${w.id}')" class="p-1.5 text-coastal-600 hover:bg-coastal-50 rounded cursor-pointer" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteWisata('${w.id}')" class="p-1.5 text-red-600 hover:bg-red-50 rounded cursor-pointer" title="Hapus"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `).join('');

            document.getElementById('admin-umkm-table').innerHTML = wilayahUmkm.map(u => `
                <tr class="hover:bg-slate-50">
                    <td class="p-4 font-bold text-slate-900">${u.nama}</td>
                    <td class="p-4"><span class="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded">${u.kategori}</span></td>
                    <td class="p-4">${u.desa}</td>
                    <td class="p-4 font-mono text-xs">+${u.wa}</td>
                    <td class="p-4 text-center">
                        <button onclick="deleteUmkm('${u.id}')" class="p-1.5 text-red-600 hover:bg-red-50 rounded cursor-pointer" title="Hapus"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `).join('');

            if (currentAdminRole === 'desa') renderAdminEventsTable();

            document.getElementById('admin-kategori-table').innerHTML = kategoriList.map(k => {
                const isVis = (k.isVisible !== false);
                return `
                    <tr class="hover:bg-slate-50">
                        <td class="p-4 font-bold text-slate-900">${k.nama}</td>
                        <td class="p-4"><span class="bg-coastal-50 text-coastal-700 text-xs px-2.5 py-1 rounded-full font-semibold">${k.jenis}</span></td>
                        <td class="p-4 text-center">
                            <button onclick="toggleKategoriVisibility('${k.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition inline-flex items-center gap-1.5 cursor-pointer ${isVis ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}">
                                <i class="fa-solid ${isVis ? 'fa-eye' : 'fa-eye-slash'}"></i>
                                ${isVis ? 'Tampil' : 'Disembunyikan'}
                            </button>
                        </td>
                        <td class="p-4 text-center space-x-2">
                            <button onclick="editKategoriModal('${k.id}')" class="px-3 py-1 bg-coastal-50 text-coastal-600 font-bold text-xs rounded-lg cursor-pointer">Edit</button>
                            <button onclick="deleteKategori('${k.id}')" class="px-3 py-1 bg-red-50 text-red-600 font-bold text-xs rounded-lg cursor-pointer">Hapus</button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        // ==========================================
        // DAMRI ADMIN RUTE TABLE & EXPLICIT SAVE
        // ==========================================
        function renderAdminDamriRoutesTable() {
            const tableBody = document.getElementById('admin-damri-routes-table');
            if (!damriData.routes || damriData.routes.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-400 text-xs">Belum ada rute DAMRI yang didaftarkan.</td></tr>`;
                return;
            }

            tableBody.innerHTML = damriData.routes.map(r => `
                <tr class="hover:bg-slate-50 transition">
                    <td class="p-4">
                        <span class="text-[10px] font-bold bg-coastal-100 text-coastal-800 px-2 py-0.5 rounded uppercase block w-fit mb-1">${escapeHtml(r.label || '')}</span>
                        <strong class="text-slate-900 font-bold text-sm block">${escapeHtml(r.nama || '')}</strong>
                    </td>
                    <td class="p-4 font-bold text-emerald-600">${escapeHtml(r.tarif || '')}</td>
                    <td class="p-4 text-xs">
                        <div><strong class="text-slate-500">Stasiun:</strong> ${escapeHtml(r.pergi || '')}</div>
                        <div><strong class="text-slate-500">Pulang:</strong> ${escapeHtml(r.pulang || '')}</div>
                    </td>
                    <td class="p-4 text-xs text-slate-600 max-w-xs leading-relaxed">${escapeHtml(r.titik || '')}</td>
                    <td class="p-4 text-xs">${r.ticketActive === false ? '<span class="text-slate-400">Nonaktif</span>' : '<span class="text-emerald-700 font-bold">Aktif</span>'}<div class="text-slate-500 mt-1">${r.ticketUrl ? 'Link tersedia' : 'Info saja'}</div></td>
                    <td class="p-4 text-center space-x-2 whitespace-nowrap">
                        <button type="button" onclick="editDamriRouteModal('${r.id}')" class="p-1.5 text-coastal-600 hover:bg-coastal-50 rounded transition cursor-pointer" title="Edit Rute"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button type="button" onclick="deleteDamriRoute('${r.id}')" class="p-1.5 text-red-600 hover:bg-red-50 rounded transition cursor-pointer" title="Hapus Rute"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `).join('');
        }

        function openAddDamriRouteModal() {
            document.getElementById('modal-damri-title').innerText = "Tambah Rute Bus DAMRI Baru";
            document.getElementById('form-damri-id').value = '';
            document.getElementById('form-damri-label').value = '';
            document.getElementById('form-damri-nama').value = '';
            document.getElementById('form-damri-tarif').value = '';
            document.getElementById('form-damri-pergi').value = '';
            document.getElementById('form-damri-pulang').value = '';
            document.getElementById('form-damri-titik').value = '';
            document.getElementById('form-damri-ticket-url').value = '';
            document.getElementById('form-damri-ticket-info').value = '';
            document.getElementById('form-damri-ticket-active').checked = true;
            openModal('modal-damri-route-form');
        }

        function editDamriRouteModal(id) {
            const r = damriData.routes.find(item => item.id === id);
            if (!r) return;
            document.getElementById('modal-damri-title').innerText = "Edit Rute Bus DAMRI";
            document.getElementById('form-damri-id').value = r.id;
            document.getElementById('form-damri-label').value = r.label;
            document.getElementById('form-damri-nama').value = r.nama;
            document.getElementById('form-damri-tarif').value = r.tarif;
            document.getElementById('form-damri-pergi').value = r.pergi;
            document.getElementById('form-damri-pulang').value = r.pulang;
            document.getElementById('form-damri-titik').value = r.titik;
            document.getElementById('form-damri-ticket-url').value = r.ticketUrl || '';
            document.getElementById('form-damri-ticket-info').value = r.ticketInfo || '';
            document.getElementById('form-damri-ticket-active').checked = r.ticketActive !== false;
            openModal('modal-damri-route-form');
        }

        // FUNGSI PENYIMPANAN YANG LANGSUNG BISA DIPANGGIL
        function executeSaveDamriRoute(e) {
            if (e) e.preventDefault();

            const fieldIds = [
                'form-damri-label', 'form-damri-nama', 'form-damri-tarif',
                'form-damri-pergi', 'form-damri-pulang', 'form-damri-titik'
            ];
            const fields = fieldIds.map(id => document.getElementById(id));
            const firstEmpty = fields.find(field => !field || !field.value.trim());
            if (firstEmpty) {
                showToast("Mohon lengkapi semua data rute terlebih dahulu!", "error");
                if (firstEmpty) firstEmpty.focus();
                return;
            }

            // Pastikan struktur data tersedia sebelum menambah atau mengubah rute.
            if (!damriData || !Array.isArray(damriData.routes)) {
                damriData = { ...(damriData || {}), routes: [] };
            }

            const id = document.getElementById('form-damri-id').value;
            const routeData = {
                id: id || 'r_' + Date.now(),
                label: document.getElementById('form-damri-label').value.trim(),
                nama: document.getElementById('form-damri-nama').value.trim(),
                tarif: document.getElementById('form-damri-tarif').value.trim(),
                pergi: document.getElementById('form-damri-pergi').value.trim(),
                pulang: document.getElementById('form-damri-pulang').value.trim(),
                titik: document.getElementById('form-damri-titik').value.trim(),
                ticketUrl: document.getElementById('form-damri-ticket-url').value.trim(),
                ticketInfo: document.getElementById('form-damri-ticket-info').value.trim(),
                ticketActive: document.getElementById('form-damri-ticket-active').checked
            };

            if (id) {
                const idx = damriData.routes.findIndex(r => r.id === id);
                if (idx === -1) {
                    showToast("Rute yang akan diedit tidak ditemukan. Silakan muat ulang halaman.", "error");
                    return;
                }
                damriData.routes[idx] = routeData;
            } else {
                damriData.routes.push(routeData);
            }

            try {
                saveState();
                renderPublicDamriView();
                renderAdminDamriRoutesTable();
                closeModal('modal-damri-route-form');
                showToast("Data Rute Bus DAMRI Berhasil Disimpan!", "success");
            } catch (error) {
                console.error('Gagal menyimpan rute DAMRI:', error);
                showToast("Rute belum berhasil disimpan. Periksa penyimpanan browser lalu coba lagi.", "error");
            }
        }

        function deleteDamriRoute(id) {
            if (confirm("Apakah Anda yakin ingin menghapus rute bus ini?")) {
                damriData.routes = damriData.routes.filter(r => r.id !== id);
                saveState();
                renderPublicDamriView();
                renderAdminDamriRoutesTable();
                showToast("Rute bus berhasil dihapus.", "info");
            }
        }

        function saveDamriWaOnly() {
            damriData.wa = document.getElementById('adm-damri-wa').value;
            saveState();
            renderPublicDamriView();
            showToast("Nomor WhatsApp CS DAMRI Berhasil Disimpan!", "success");
        }

        function saveDamriAnnouncement(e) {
            e.preventDefault();
            const text = document.getElementById('adm-damri-announcement-input').value.trim();
            damriData.announcement = text;
            saveState();
            renderPublicDamriView();
            showToast("Pemberitahuan perubahan rute berhasil dipublikasikan!", "success");
        }

        function clearDamriAnnouncement() {
            damriData.announcement = "";
            document.getElementById('adm-damri-announcement-input').value = "";
            saveState();
            renderPublicDamriView();
            showToast("Pengumuman berhasil dihapus/dinonaktifkan.", "info");
        }

        // ==========================================
        // GENERIC CRUD FUNCTIONS
        // ==========================================
        function toggleUnggulan(id) {
            const item = wisataList.find(w => w.id === id);
            if (item) {
                item.isUnggulan = !item.isUnggulan;
                saveState();
                renderAdminTables();
                renderFeaturedWisata();
                showToast(`Status unggulan diperbarui!`, "success");
            }
        }

        function toggleKategoriVisibility(id) {
            const kat = kategoriList.find(k => k.id === id);
            if (kat) {
                kat.isVisible = (kat.isVisible === false) ? true : false;
                saveState();
                renderAdminTables();
                renderWisataGrid(wisataList);
                renderUmkmGrid(umkmList);
                renderUmkmCategoryPills();
                showToast(`Status kategori ${kat.nama} diperbarui!`, "info");
            }
        }

        function openKategoriModal() {
            document.getElementById('modal-kategori-form-title').innerText = "Tambah Kategori Baru";
            document.getElementById('form-kategori-id').value = '';
            document.getElementById('form-kategori-nama').value = '';
            openModal('modal-admin-kategori-form');
        }

        function editKategoriModal(id) {
            const cat = kategoriList.find(k => k.id === id);
            if (!cat) return;
            document.getElementById('modal-kategori-form-title').innerText = "Edit Kategori";
            document.getElementById('form-kategori-id').value = cat.id;
            document.getElementById('form-kategori-nama').value = cat.nama;
            document.getElementById('form-kategori-jenis').value = cat.jenis;
            openModal('modal-admin-kategori-form');
        }

        function saveKategoriForm(e) {
            e.preventDefault();
            const id = document.getElementById('form-kategori-id').value;
            const nama = document.getElementById('form-kategori-nama').value;
            const jenis = document.getElementById('form-kategori-jenis').value;

            if (id) {
                const index = kategoriList.findIndex(k => k.id === id);
                if (index !== -1) {
                    kategoriList[index].nama = nama;
                    kategoriList[index].jenis = jenis;
                }
            } else {
                kategoriList.push({ id: 'k_' + Date.now(), nama: nama, jenis: jenis, isVisible: true });
            }

            saveState();
            renderAdminTables();
            renderWisataGrid();
            renderUmkmGrid();
            renderUmkmCategoryPills();
            closeModal('modal-admin-kategori-form');
            showToast("Kategori berhasil disimpan!", "success");
        }

        function deleteKategori(id) {
            if (confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
                kategoriList = kategoriList.filter(k => k.id !== id);
                saveState();
                renderAdminTables();
                renderWisataGrid();
                renderUmkmGrid();
                renderUmkmCategoryPills();
                showToast("Kategori berhasil dihapus.", "info");
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const resortInput = document.getElementById('form-wisata-resort-img');
            const resortPreview = document.getElementById('form-wisata-resort-preview');
            if (resortInput && resortPreview) resortInput.addEventListener('input', () => {
                resortPreview.src = resortInput.value.trim();
                resortPreview.classList.toggle('hidden', !resortInput.value.trim());
            });
        });

        function openWisataModal() {
            const kecField = document.getElementById('form-wisata-kecamatan');
            if (currentAdminRole === 'desa') {
                kecField.value = currentAdminArea;
                kecField.disabled = true;
            } else {
                kecField.disabled = false;
            }
            document.getElementById('modal-wisata-form-title').innerText = "Tambah Destinasi Wisata";
            document.getElementById('form-wisata-id').value = '';
            document.getElementById('form-wisata-nama').value = '';
            document.getElementById('form-wisata-harga').value = '';
            document.getElementById('form-wisata-jam').value = '';
            document.getElementById('form-wisata-img').value = '';
            document.getElementById('form-wisata-resort-img').value = '';
            document.getElementById('form-wisata-resort-preview').classList.add('hidden');
            document.getElementById('form-wisata-resort-preview').src = '';
            document.getElementById('form-wisata-desc').value = '';
            openModal('modal-admin-wisata-form');
        }

        function editWisataModal(id) {
            const w = wisataList.find(item => item.id === id);
            if (!w) return;
            if (currentAdminRole === 'desa' && w.kecamatan !== currentAdminArea) { showToast('Akses ditolak. Destinasi ini bukan milik wilayah Anda.', 'error'); return; }
            document.getElementById('modal-wisata-form-title').innerText = "Edit Destinasi Wisata";
            document.getElementById('form-wisata-id').value = w.id;
            document.getElementById('form-wisata-nama').value = w.nama;
            document.getElementById('form-wisata-kecamatan').value = w.kecamatan;
            document.getElementById('form-wisata-kecamatan').disabled = currentAdminRole === 'desa';
            document.getElementById('form-wisata-kategori').value = w.kategori;
            document.getElementById('form-wisata-harga').value = w.harga;
            document.getElementById('form-wisata-jam').value = w.jam;
            document.getElementById('form-wisata-img').value = w.img;
            const resortPhoto = w.homestays?.[0]?.img || '';
            document.getElementById('form-wisata-resort-img').value = resortPhoto;
            const resortPreview = document.getElementById('form-wisata-resort-preview');
            resortPreview.src = resortPhoto;
            resortPreview.classList.toggle('hidden', !resortPhoto);
            document.getElementById('form-wisata-desc').value = w.desc;
            openModal('modal-admin-wisata-form');
        }

        function saveWisataForm(e) {
            e.preventDefault();
            const id = document.getElementById('form-wisata-id').value;
            const newData = {
                id: id || 'w_' + Date.now(),
                nama: document.getElementById('form-wisata-nama').value,
                kecamatan: document.getElementById('form-wisata-kecamatan').value,
                kategori: document.getElementById('form-wisata-kategori').value,
                harga: document.getElementById('form-wisata-harga').value,
                jam: document.getElementById('form-wisata-jam').value,
                img: document.getElementById('form-wisata-img').value,
                desc: document.getElementById('form-wisata-desc').value,
                maps: "https://maps.google.com/?q=" + encodeURIComponent(document.getElementById('form-wisata-nama').value),
                isUnggulan: false,
                homestays: []
            };
            const resortPhoto = document.getElementById('form-wisata-resort-img').value.trim();

            if (id) {
                const index = wisataList.findIndex(w => w.id === id);
                if (index !== -1) {
                    const existing = wisataList[index];
                    newData.isUnggulan = existing.isUnggulan;
                    newData.maps = existing.maps || newData.maps;
                    newData.homestays = Array.isArray(existing.homestays) ? existing.homestays.map(h => ({ ...h })) : [];
                    if (resortPhoto) {
                        if (newData.homestays.length) newData.homestays[0].img = resortPhoto;
                        else newData.homestays.push({ nama: 'Penginapan Terdekat', tarif: 'Hubungi pengelola', fasilitas: 'Informasi melalui WhatsApp', wa: '', img: resortPhoto });
                    } else if (newData.homestays.length) {
                        newData.homestays[0].img = '';
                    }
                    wisataList[index] = newData;
                }
            } else {
                if (resortPhoto) newData.homestays.push({ nama: 'Penginapan Terdekat', tarif: 'Hubungi pengelola', fasilitas: 'Informasi melalui WhatsApp', wa: '', img: resortPhoto });
                wisataList.unshift(newData);
            }

            saveState();
            renderFeaturedWisata();
            renderWisataGrid();
            renderAdminTables();
            closeModal('modal-admin-wisata-form');
            showToast("Data Wisata Berhasil Disimpan!", "success");
        }

        function deleteWisata(id) {
            const target = wisataList.find(w => w.id === id);
            if (currentAdminRole === 'desa' && (!target || target.kecamatan !== currentAdminArea)) { showToast('Akses ditolak. Destinasi ini bukan milik wilayah Anda.', 'error'); return; }
            if (confirm("Hapus destinasi wisata ini?")) {
                wisataList = wisataList.filter(w => w.id !== id);
                saveState();
                renderFeaturedWisata();
                renderWisataGrid();
                renderAdminTables();
                showToast("Data wisata berhasil dihapus.", "info");
            }
        }

        function renderAdminResortsTable() {
            const tbody = document.getElementById('admin-resort-table');
            if (!tbody) return;
            const rows = resortList.filter(r => currentAdminRole !== 'desa' || r.area === currentAdminArea);
            tbody.innerHTML = rows.map(r => {
                const w = wisataList.find(x => x.id === r.wisataId);
                return `<tr><td class="p-3"><div class="flex items-center gap-3">${r.img ? `<img src="${escapeHtml(r.img)}" alt="" class="w-12 h-12 rounded-lg object-cover" onerror="this.style.display='none'">` : `<div class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"><i class="fa-solid fa-hotel"></i></div>`}<div><div class="font-bold">${escapeHtml(r.nama)}</div><div class="text-xs text-slate-500">${escapeHtml(r.fasilitas || '-')}</div></div></div></td><td class="p-3">${escapeHtml(w?.nama || 'Destinasi dihapus')}</td><td class="p-3">${escapeHtml(r.area || '-')}</td><td class="p-3">${escapeHtml(r.tarif || '-')}</td><td class="p-3 text-center whitespace-nowrap"><button onclick="editResortForm('${r.id}')" class="text-coastal-600 px-2 py-1"><i class="fa-solid fa-pen"></i> Edit</button><button onclick="deleteResort('${r.id}')" class="text-red-600 px-2 py-1"><i class="fa-solid fa-trash"></i> Hapus</button></td></tr>`;
            }).join('') || `<tr><td colspan="5" class="p-6 text-center text-slate-400">Belum ada resort untuk wilayah ini. Klik Tambah Resort untuk menambahkan.</td></tr>`;
        }

        function openResortForm() {
            if (!['desa','super'].includes(currentAdminRole)) { showToast('Akses ditolak.', 'error'); return; }
            const select = document.getElementById('form-resort-wisata');
            const eligible = wisataList.filter(w => currentAdminRole !== 'desa' || w.kecamatan === currentAdminArea);
            if (!eligible.length) { showToast('Belum ada destinasi wisata di wilayah ini. Tambahkan destinasi terlebih dahulu.', 'error'); return; }
            select.innerHTML = eligible.map(w => `<option value="${w.id}">${escapeHtml(w.nama)} — ${escapeHtml(w.kecamatan)}</option>`).join('');
            document.getElementById('modal-resort-form-title').innerText = 'Tambah Resort / Homestay';
            document.getElementById('form-resort-id').value = '';
            document.getElementById('form-resort-name').value = '';
            document.getElementById('form-resort-price').value = '';
            document.getElementById('form-resort-wa').value = '';
            document.getElementById('form-resort-facilities').value = '';
            document.getElementById('form-resort-img').value = '';
            document.getElementById('form-resort-preview').classList.add('hidden');
            openModal('modal-admin-resort-form');
        }

        function editResortForm(id) {
            const r = resortList.find(x => x.id === id);
            if (!r || (currentAdminRole === 'desa' && r.area !== currentAdminArea) || !['desa','super'].includes(currentAdminRole)) { showToast('Akses ditolak. Resort ini bukan milik wilayah Anda.', 'error'); return; }
            openResortForm();
            document.getElementById('modal-resort-form-title').innerText = 'Edit Resort / Homestay';
            document.getElementById('form-resort-id').value = r.id;
            document.getElementById('form-resort-name').value = r.nama || '';
            document.getElementById('form-resort-wisata').value = r.wisataId;
            document.getElementById('form-resort-price').value = r.tarif || '';
            document.getElementById('form-resort-wa').value = r.wa || '';
            document.getElementById('form-resort-facilities').value = r.fasilitas || '';
            document.getElementById('form-resort-img').value = r.img || '';
            const preview = document.getElementById('form-resort-preview'); preview.src = r.img || ''; preview.classList.toggle('hidden', !r.img);
        }

        function saveResortForm(e) {
            e.preventDefault();
            if (!['desa','super'].includes(currentAdminRole)) { showToast('Akses ditolak.', 'error'); return; }
            const id = document.getElementById('form-resort-id').value;
            const wisataId = document.getElementById('form-resort-wisata').value;
            const wisata = wisataList.find(w => w.id === wisataId);
            const old = resortList.find(r => r.id === id);
            if (!wisata || (currentAdminRole === 'desa' && wisata.kecamatan !== currentAdminArea) || (old && currentAdminRole === 'desa' && old.area !== currentAdminArea)) { showToast('Akses ditolak. Anda hanya dapat mengelola resort di wilayah akun Anda.', 'error'); return; }
            const item = { id: id || 'resort_' + Date.now(), wisataId, area: wisata.kecamatan, nama: document.getElementById('form-resort-name').value.trim(), tarif: document.getElementById('form-resort-price').value.trim(), wa: document.getElementById('form-resort-wa').value.replace(/[^0-9]/g, ''), fasilitas: document.getElementById('form-resort-facilities').value.trim(), img: document.getElementById('form-resort-img').value.trim() };
            if (old) resortList = resortList.map(r => r.id === id ? item : r); else resortList.push(item);
            saveState(); renderAdminResortsTable(); closeModal('modal-admin-resort-form');
            const detailOpen = !document.getElementById('modal-wisata-detail').classList.contains('hidden');
            if (detailOpen) { const active = wisataList.find(w => w.id === wisataId); if (active) openWisataDetailModal(active.id); }
            showToast('Data resort berhasil disimpan.', 'success');
        }

        function deleteResort(id) {
            const r = resortList.find(x => x.id === id);
            if (!r || !['desa','super'].includes(currentAdminRole) || (currentAdminRole === 'desa' && r.area !== currentAdminArea)) { showToast('Akses ditolak. Resort ini bukan milik wilayah Anda.', 'error'); return; }
            if (!confirm(`Hapus ${r.nama}?`)) return;
            resortList = resortList.filter(x => x.id !== id); saveState(); renderAdminResortsTable(); showToast('Resort berhasil dihapus.', 'success');
        }

        document.addEventListener('input', function(e) {
            if (e.target && e.target.id === 'form-resort-img') { const p = document.getElementById('form-resort-preview'); p.src = e.target.value.trim(); p.classList.toggle('hidden', !e.target.value.trim()); }
        });

        function openUmkmModal() {
            document.getElementById('modal-admin-umkm-form').classList.remove('hidden');
        }

        function saveUmkmForm(e) {
            e.preventDefault();
            const newData = {
                id: 'u_' + Date.now(),
                nama: document.getElementById('form-umkm-nama').value,
                kategori: document.getElementById('form-umkm-kategori').value,
                desa: document.getElementById('form-umkm-desa').value,
                wa: document.getElementById('form-umkm-wa').value,
                img: document.getElementById('form-umkm-img').value,
                desc: document.getElementById('form-umkm-desc').value
            };
            umkmList.unshift(newData);
            saveState();
            renderUmkmGrid();
            renderAdminTables();
            closeModal('modal-admin-umkm-form');
            showToast("Data UMKM Baru Berhasil Ditambahkan!", "success");
        }

        function deleteUmkm(id) {
            if (confirm("Hapus produk UMKM ini dari direktori?")) {
                umkmList = umkmList.filter(u => u.id !== id);
                saveState();
                renderUmkmGrid();
                renderAdminTables();
                showToast("Data UMKM berhasil dihapus.", "info");
            }
        }

        function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
        function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

        function showToast(message, type = 'info') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            const bgClass = type === 'success' ? 'bg-emerald-600' : (type === 'error' ? 'bg-red-600' : 'bg-coastal-900');
            
            toast.className = `${bgClass} text-white px-4 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0`;
            toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
            
            container.appendChild(toast);
            setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 10);
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
    
        // ==========================================
        // PENGATURAN LOGO WEBSITE
        // ==========================================
        function applyWebsiteLogo(dataUrl) {
            ['website-logo-header','website-logo-footer','website-logo-preview'].forEach(id => {
                const img=document.getElementById(id); if(!img) return;
                if(dataUrl){ img.src=dataUrl; img.classList.remove('hidden'); }
                else { img.removeAttribute('src'); img.classList.add('hidden'); }
            });
            ['website-logo-header-fallback','website-logo-footer-fallback','website-logo-preview-fallback'].forEach(id => {
                const el=document.getElementById(id); if(el) el.classList.toggle('hidden',!!dataUrl);
            });
        }
        function loadWebsiteLogoPreview() { applyWebsiteLogo(localStorage.getItem('jms_website_logo') || ''); }
        function previewWebsiteLogo(event) {
            const file=event.target.files && event.target.files[0]; if(!file) return;
            if(!['image/png','image/jpeg','image/webp','image/svg+xml'].includes(file.type)){ showToast('Format logo harus PNG, JPG, WebP, atau SVG.','error'); event.target.value=''; return; }
            if(file.size > 1024*1024){ showToast('Ukuran logo maksimal 1 MB.','error'); event.target.value=''; return; }
            const reader=new FileReader(); reader.onload=()=>{ const preview=document.getElementById('website-logo-preview'); preview.src=String(reader.result); preview.classList.remove('hidden'); document.getElementById('website-logo-preview-fallback').classList.add('hidden'); }; reader.onerror=()=>showToast('Gagal membaca file logo.','error'); reader.readAsDataURL(file);
        }
        function saveWebsiteLogo() {
            if(currentAdminRole!=='super'){showToast('Hanya Admin Utama yang dapat mengubah logo.','error');return;}
            const input=document.getElementById('website-logo-file'); const file=input.files && input.files[0];
            if(!file){showToast('Pilih file logo terlebih dahulu.','error');return;}
            const reader=new FileReader(); reader.onload=()=>{ try { localStorage.setItem('jms_website_logo',String(reader.result)); applyWebsiteLogo(String(reader.result)); showToast('Logo website berhasil disimpan.','success'); } catch(e){showToast('Gagal menyimpan logo. Coba gambar lebih kecil.','error');} }; reader.readAsDataURL(file);
        }
        function resetWebsiteLogo() {
            if(currentAdminRole!=='super') return;
            localStorage.removeItem('jms_website_logo'); document.getElementById('website-logo-file').value=''; applyWebsiteLogo(''); showToast('Logo default dipulihkan.','success');
        }

        // Pengaturan teks banner Wisata, UMKM, dan Event Budaya.
        const BANNER_DEFAULTS = {
            wisata: { label: 'Pesona Alam Malang Selatan', title: 'Direktori Wisata & Desa Pesisir', description: 'Jelajahi pantai eksotis, desa wisata, kawasan konservasi mangrove, serta keindahan alam dan kearifan lokal di pesisir Malang Selatan.' },
            umkm: { label: 'Ekonomi Kreatif Desa', title: 'Direktori UMKM & Oleh-Oleh Lokal', description: 'Dukung perekonomian warga Malang Selatan dengan membeli produk olahan laut segar, batik pesisir, dan kerajinan tangan khas desa wisata secara langsung.' },
            event: { label: 'Tradisi dan Kearifan Lokal', title: 'Agenda Event & Upacara Adat', description: 'Temukan jadwal tradisi desa, upacara adat, petik laut, dan festival budaya Malang Selatan, termasuk informasi waktu serta lokasi penyelenggaraan.' }
        };
        function applyBannerContent(section, cfg) {
            const root = document.getElementById(section + '-hero-background'); if (!root) return;
            const parts = root.querySelectorAll('span, h1, p');
            if (parts[0]) parts[0].textContent = cfg.label || '';
            if (parts[1]) parts[1].textContent = cfg.title || '';
            if (parts[2]) parts[2].textContent = cfg.description || '';
        }
        function loadBannerContentSettings() {
            Object.keys(BANNER_DEFAULTS).forEach(section => {
                let cfg = {}; try { cfg = JSON.parse(localStorage.getItem('jms_' + section + '_banner_content') || '{}'); } catch (_) {}
                cfg = { ...BANNER_DEFAULTS[section], ...cfg };
                ['label','title','description'].forEach(field => { const input = document.getElementById(section + '-banner-' + field); if (input) input.value = cfg[field] || ''; });
                applyBannerContent(section, cfg);
            });
        }
        function saveBannerContent(section) {
            if (currentAdminRole !== 'super') { showToast('Hanya Admin Utama yang dapat mengubah banner.','error'); return; }
            const cfg = {};
            ['label','title','description'].forEach(field => { cfg[field] = String(document.getElementById(section + '-banner-' + field)?.value || '').trim(); });
            if (!cfg.title || !cfg.label || !cfg.description) { showToast('Label, judul, dan deskripsi banner wajib diisi.','error'); return; }
            try { localStorage.setItem('jms_' + section + '_banner_content', JSON.stringify(cfg)); applyBannerContent(section, cfg); showToast('Teks banner berhasil disimpan.','success'); }
            catch (_) { showToast('Gagal menyimpan pengaturan banner.','error'); }
        }

        // ==========================================
        // MULTI FOTO BACKGROUND BERANDA, WISATA, UMKM, DAN EVENT
        // ==========================================
        const SECTION_BG_KEYS = { home: 'jms_home_hero_backgrounds', umkm: 'jms_umkm_hero_backgrounds', wisata: 'jms_wisata_hero_backgrounds', event: 'jms_event_hero_backgrounds' };
        const SECTION_BG_LEGACY_KEYS = { home: 'jms_home_hero_background', umkm: 'jms_umkm_hero_background', wisata: 'jms_wisata_hero_background', event: 'jms_event_hero_background' };
        const SECTION_BG_TARGETS = { home: 'home-hero-background', umkm: 'umkm-hero-background', wisata: 'wisata-hero-background', event: 'event-hero-background' };
        const SECTION_BG_DEFAULTS = { home: [], umkm: [], wisata: [], event: [] };
        const pendingSectionBackgrounds = { home: [], umkm: [], wisata: [], event: [] };
        const sectionBackgroundIndexes = { home: 0, umkm: 0, wisata: 0, event: 0 };
        const sectionBackgroundTimers = { home: null, umkm: null, wisata: null, event: null };

        function getSectionBackgrounds(section) {
            try {
                const raw = localStorage.getItem(SECTION_BG_KEYS[section]);
                if (raw) { const parsed = JSON.parse(raw); if (Array.isArray(parsed)) return parsed.filter(x => typeof x === 'string' && x); }
                const legacy = localStorage.getItem(SECTION_BG_LEGACY_KEYS[section]);
                return legacy ? [legacy] : [];
            } catch (_) { return []; }
        }
        function applySectionBackgroundImage(section, image) {
            const target = document.getElementById(SECTION_BG_TARGETS[section]);
            const preview = document.getElementById(section + '-bg-preview');
            [target, preview].forEach(el => {
                if (!el) return;
                if (image) {
                    el.style.backgroundImage = `linear-gradient(rgba(2,20,32,.48), rgba(2,20,32,.48)), url("${String(image).replace(/\\/g, '\\\\').replace(/"/g, '%22')}")`;
                    el.style.backgroundSize = 'cover'; el.style.backgroundPosition = 'center';
                } else { el.style.backgroundImage = ''; el.style.backgroundSize = ''; el.style.backgroundPosition = ''; }
            });
        }
        function setSectionBackgrounds(section, images, rotate = true) {
            const clean = Array.isArray(images) ? images.filter(Boolean) : [];
            pendingSectionBackgrounds[section] = clean;
            sectionBackgroundIndexes[section] = 0;
            if (sectionBackgroundTimers[section]) clearInterval(sectionBackgroundTimers[section]);
            applySectionBackgroundImage(section, clean[0] || '');
            if (rotate && clean.length > 1) {
                sectionBackgroundTimers[section] = setInterval(() => {
                    sectionBackgroundIndexes[section] = (sectionBackgroundIndexes[section] + 1) % clean.length;
                    applySectionBackgroundImage(section, clean[sectionBackgroundIndexes[section]]);
                }, 5000);
            }
            renderSectionBackgroundList(section, clean);
        }
        function renderSectionBackgroundList(section, images) {
            const list = document.getElementById(section + '-bg-list'); if (!list) return;
            list.innerHTML = images.map((src, i) => `<div class="relative"><img src="${src.replace(/"/g, '&quot;')}" alt="Foto ${i+1}" class="w-full h-16 object-cover rounded border border-slate-200" onerror="this.style.opacity='.35'"><span class="absolute left-1 bottom-1 text-[10px] bg-black/70 text-white rounded px-1">Foto ${i+1}</span></div>`).join('');
        }
        function loadSectionBackgroundSettings() {
            ['home','umkm','wisata','event'].forEach(section => {
                const images = getSectionBackgrounds(section);
                setSectionBackgrounds(section, images);
                const urlInput = document.getElementById(section + '-bg-url');
                const fileInput = document.getElementById(section + '-bg-file');
                if (urlInput) urlInput.value = images.filter(x => !x.startsWith('data:')).join('\n');
                if (fileInput) fileInput.value = '';
            });
        }
        function previewSectionBackgroundFiles(event, section) {
            const files = Array.from(event.target.files || []); if (!files.length) return;
            if (files.length > 5) { showToast('Pilih maksimal 5 foto sekaligus.','error'); event.target.value=''; return; }
            for (const file of files) {
                if (!['image/png','image/jpeg','image/webp'].includes(file.type)) { showToast('Gunakan gambar PNG, JPG, atau WebP.','error'); event.target.value=''; return; }
                if (file.size > 1024 * 1024) { showToast('Setiap foto maksimal 1 MB.','error'); event.target.value=''; return; }
            }
            Promise.all(files.map(file => new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = reject; reader.readAsDataURL(file); })))
                .then(images => { const urls = String(document.getElementById(section+'-bg-url')?.value || '').split(/\r?\n/).map(x=>x.trim()).filter(Boolean); const merged = [...images, ...urls].slice(0,10); setSectionBackgrounds(section, merged, false); showToast(`${images.length} foto berhasil dimuat untuk pratinjau.`,'success'); })
                .catch(() => showToast('Ada foto yang gagal dibaca.','error'));
        }
        function previewSectionBackgroundUrls(section, value) {
            const urls = String(value || '').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
            if (urls.length > 10) { showToast('Maksimal 10 URL foto per halaman.','error'); return; }
            for (const url of urls) { try { const parsed = new URL(url); if (!['http:','https:'].includes(parsed.protocol)) throw new Error(); } catch (_) { return; } }
            const uploaded = pendingSectionBackgrounds[section].filter(x=>x.startsWith('data:'));
            setSectionBackgrounds(section, [...uploaded, ...urls].slice(0,10), false);
        }
        function saveSectionBackground(section) {
            if (currentAdminRole !== 'super') { showToast('Hanya Admin Utama yang dapat mengubah foto background.','error'); return; }
            const urls = String(document.getElementById(section+'-bg-url')?.value || '').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
            if (urls.length > 10) { showToast('Maksimal 10 URL foto per halaman.','error'); return; }
            for (const url of urls) { try { const parsed = new URL(url); if (!['http:','https:'].includes(parsed.protocol)) throw new Error(); } catch (_) { showToast('Pastikan setiap URL foto memakai HTTP/HTTPS dan satu URL per baris.','error'); return; } }
            const uploaded = pendingSectionBackgrounds[section].filter(x=>x.startsWith('data:'));
            const images = [...uploaded, ...urls].filter((x,i,a)=>a.indexOf(x)===i).slice(0,10);
            try {
                if (images.length) localStorage.setItem(SECTION_BG_KEYS[section], JSON.stringify(images)); else localStorage.removeItem(SECTION_BG_KEYS[section]);
                localStorage.removeItem(SECTION_BG_LEGACY_KEYS[section]);
                setSectionBackgrounds(section, images);
                showToast(({home:'Foto Beranda',umkm:'Foto UMKM',wisata:'Foto Wisata',event:'Foto Event'})[section] + ' berhasil disimpan.','success');
            } catch (error) { showToast('Penyimpanan penuh. Gunakan URL foto publik atau unggah lebih sedikit foto.','error'); }
        }
        function resetSectionBackground(section) {
            if (currentAdminRole !== 'super') { showToast('Hanya Admin Utama yang dapat mengubah foto background.','error'); return; }
            localStorage.removeItem(SECTION_BG_KEYS[section]); localStorage.removeItem(SECTION_BG_LEGACY_KEYS[section]);
            const fileInput=document.getElementById(section+'-bg-file'); if(fileInput) fileInput.value='';
            const urlInput=document.getElementById(section+'-bg-url'); if(urlInput) urlInput.value='';
            setSectionBackgrounds(section, []); showToast('Foto background default berhasil dipulihkan.','success');
        }

        // WEB SCRAPER: hanya mengambil HTML publik yang dapat diakses; tidak melewati login, paywall, atau proteksi situs.
        let scraperCurrentResults = null;
        const SCRAPER_STORAGE_KEY = 'jms_web_scraper_saved_results';
        function scraperSetStatus(message, type='info') {
            const el=document.getElementById('scraper-status'); if(!el) return;
            const styles={info:'bg-blue-50 border-blue-100 text-blue-800',success:'bg-emerald-50 border-emerald-100 text-emerald-800',error:'bg-red-50 border-red-100 text-red-800',warning:'bg-amber-50 border-amber-200 text-amber-800'};
            el.className='rounded-lg border p-3 text-sm '+(styles[type]||styles.info); el.textContent=message;
        }
        function scraperSafeUrl(value, base) {
            try { const u=new URL(value,base); return ['http:','https:'].includes(u.protocol) ? u.href : ''; } catch (_) { return ''; }
        }
        function parseScraperHtml(html, sourceUrl='') {
            const parser=new DOMParser(); const doc=parser.parseFromString(String(html||''),'text/html');
            doc.querySelectorAll('script,style,noscript,iframe,object,embed,svg').forEach(el=>el.remove());
            const textOf=el=>(el?.textContent||'').replace(/\s+/g,' ').trim();
            const links=Array.from(doc.querySelectorAll('a[href]')).map(a=>({text:textOf(a).slice(0,300),url:scraperSafeUrl(a.getAttribute('href'),sourceUrl||document.baseURI)})).filter(x=>x.url).slice(0,100);
            const images=Array.from(doc.querySelectorAll('img[src],source[srcset]')).map(el=>{
                const raw=el.tagName.toLowerCase()==='source' ? (el.getAttribute('srcset')||'').split(',')[0].trim().split(/\s+/)[0] : el.getAttribute('src');
                return {alt:(el.getAttribute('alt')||'').trim().slice(0,300),url:scraperSafeUrl(raw,sourceUrl||document.baseURI)};
            }).filter(x=>x.url).slice(0,100);
            return {sourceUrl:sourceUrl||'HTML lokal/tempelan',scrapedAt:new Date().toISOString(),title:textOf(doc.querySelector('title')),description:doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim()||doc.querySelector('meta[property="og:description"]')?.getAttribute('content')?.trim()||'',headings:Array.from(doc.querySelectorAll('h1,h2,h3')).map(h=>({level:h.tagName.toLowerCase(),text:textOf(h).slice(0,500)})).filter(x=>x.text).slice(0,100),links,images,mainText:textOf(doc.querySelector('main')||doc.querySelector('article')||doc.body).slice(0,12000)};
        }
        function escapeScraperHtml(value) { return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
        function renderScraperResults(data) {
            scraperCurrentResults=data;
            const box=document.getElementById('scraper-results'); if(!box) return;
            if(!data){box.innerHTML='<p class="text-sm text-slate-500">Hasil ekstraksi akan muncul di sini.</p>';return;}
            box.innerHTML=`<div class="rounded-lg border border-slate-200 p-4 space-y-2"><p class="text-xs text-slate-500 break-all">Sumber: ${escapeScraperHtml(data.sourceUrl)}</p><h5 class="text-base font-bold text-slate-900">${escapeScraperHtml(data.title||'(Tanpa judul)')}</h5><p class="text-sm text-slate-600">${escapeScraperHtml(data.description||'Tidak ada meta description.')}</p><div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs"><div class="bg-slate-50 rounded p-2"><strong>${data.headings.length}</strong><br>Heading</div><div class="bg-slate-50 rounded p-2"><strong>${data.links.length}</strong><br>Tautan</div><div class="bg-slate-50 rounded p-2"><strong>${data.images.length}</strong><br>Gambar</div><div class="bg-slate-50 rounded p-2"><strong>${data.mainText.length}</strong><br>Karakter teks</div></div><details class="pt-2"><summary class="cursor-pointer text-sm font-bold text-blue-700">Lihat rincian hasil</summary><div class="mt-3 space-y-3"><div><strong class="text-sm">Heading</strong><ul class="list-disc pl-5 text-sm text-slate-600">${data.headings.slice(0,30).map(h=>`<li>${escapeScraperHtml(h.level.toUpperCase())}: ${escapeScraperHtml(h.text)}</li>`).join('')||'<li>Tidak ditemukan</li>'}</ul></div><div><strong class="text-sm">Tautan</strong><ul class="list-disc pl-5 text-sm text-blue-700 break-all">${data.links.slice(0,30).map(a=>`<li><a href="${escapeScraperHtml(a.url)}" target="_blank" rel="noopener noreferrer">${escapeScraperHtml(a.text||a.url)}</a></li>`).join('')||'<li>Tidak ditemukan</li>'}</ul></div><div><strong class="text-sm">Gambar</strong><ul class="list-disc pl-5 text-sm text-slate-600 break-all">${data.images.slice(0,30).map(a=>`<li>${escapeScraperHtml(a.alt||'Tanpa teks alternatif')} — ${escapeScraperHtml(a.url)}</li>`).join('')||'<li>Tidak ditemukan</li>'}</ul></div><div><strong class="text-sm">Teks utama</strong><p class="mt-1 whitespace-pre-wrap text-sm text-slate-600">${escapeScraperHtml(data.mainText.slice(0,5000))}</p></div></div></details></div>`;
        }
        async function scrapePublicUrl() {
            if(currentAdminRole!=='super'){showToast('Fitur Web Scraper hanya untuk Admin Utama.','error');return;}
            const input=document.getElementById('scraper-url'); const url=scraperSafeUrl(input?.value||'');
            if(!url){scraperSetStatus('Masukkan URL HTTP/HTTPS yang valid.','error');return;}
            scraperSetStatus('Sedang mengambil halaman. Situs tujuan harus mengizinkan akses lintas domain (CORS)...','info');
            try {
                const response=await fetch(url,{method:'GET',mode:'cors',credentials:'omit',redirect:'follow'});
                if(!response.ok) throw new Error('Server mengembalikan HTTP '+response.status);
                const type=response.headers.get('content-type')||''; if(type && !type.includes('text/html') && !type.includes('application/xhtml+xml')) throw new Error('URL bukan halaman HTML.');
                const html=await response.text(); const result=parseScraperHtml(html,response.url||url); renderScraperResults(result); scraperSetStatus('Berhasil mengambil dan mengekstrak data halaman. Tinjau hasil sebelum menyimpan.','success');
            } catch(error) { scraperSetStatus('Tidak dapat mengambil URL dari browser: '+(error?.message||'akses ditolak')+'. Kemungkinan situs membatasi CORS. Coba unggah file HTML atau tempel kode sumber.','error'); }
        }
        function scrapePastedHtml() {
            if(currentAdminRole!=='super'){showToast('Fitur Web Scraper hanya untuk Admin Utama.','error');return;}
            const html=document.getElementById('scraper-html-input')?.value||'';
            if(!html.trim()){scraperSetStatus('Tempel kode HTML terlebih dahulu.','error');return;}
            const source=scraperSafeUrl(document.getElementById('scraper-url')?.value||'')||'';
            renderScraperResults(parseScraperHtml(html,source)); scraperSetStatus('HTML berhasil diproses. Periksa hasil ekstraksi sebelum menyimpan.','success');
        }
        function scrapeHtmlFile(event) {
            if(currentAdminRole!=='super'){showToast('Fitur Web Scraper hanya untuk Admin Utama.','error');event.target.value='';return;}
            const file=event.target.files?.[0]; if(!file)return;
            if(file.size>5*1024*1024){scraperSetStatus('Ukuran file HTML maksimal 5 MB.','error');event.target.value='';return;}
            const reader=new FileReader(); reader.onload=()=>{document.getElementById('scraper-html-input').value=String(reader.result||'');renderScraperResults(parseScraperHtml(String(reader.result||''),''));scraperSetStatus('File HTML berhasil dibaca. Tinjau hasil ekstraksi sebelum menyimpan.','success');}; reader.onerror=()=>scraperSetStatus('File gagal dibaca.','error'); reader.readAsText(file);
        }
        function saveScraperResults() {
            if(currentAdminRole!=='super'){showToast('Fitur Web Scraper hanya untuk Admin Utama.','error');return;}
            if(!scraperCurrentResults){scraperSetStatus('Belum ada hasil untuk disimpan.','error');return;}
            try {const saved=JSON.parse(localStorage.getItem(SCRAPER_STORAGE_KEY)||'[]');saved.unshift(scraperCurrentResults);localStorage.setItem(SCRAPER_STORAGE_KEY,JSON.stringify(saved.slice(0,50)));loadSavedScraperResults();scraperSetStatus('Hasil ekstraksi disimpan di browser ini.','success');showToast('Hasil scraper berhasil disimpan.','success');}catch(_){scraperSetStatus('LocalStorage penuh. Hapus hasil lama atau unduh JSON.','error');}
        }
        function loadSavedScraperResults() {
            const label=document.getElementById('scraper-saved-count');if(!label)return;
            try {const saved=JSON.parse(localStorage.getItem(SCRAPER_STORAGE_KEY)||'[]');label.textContent=`${saved.length} hasil tersimpan di browser ini.`;}catch(_){label.textContent='Data tersimpan tidak dapat dibaca.';}
        }
        function exportScraperResults() {
            if(currentAdminRole!=='super'){showToast('Fitur Web Scraper hanya untuk Admin Utama.','error');return;}
            if(!scraperCurrentResults){scraperSetStatus('Tidak ada hasil untuk diunduh.','error');return;}
            const blob=new Blob([JSON.stringify(scraperCurrentResults,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='hasil-web-scraper-jelajah.json';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);showToast('File JSON berhasil disiapkan.','success');
        }
        function clearScraperResults() {renderScraperResults(null);document.getElementById('scraper-html-input').value='';document.getElementById('scraper-file').value='';scraperSetStatus('Hasil tampilan dibersihkan. Data tersimpan di LocalStorage tidak dihapus.','info');}

        // Google Maps scraper tanpa API key: dijalankan oleh backend Python/Playwright.
        // Hasil scraping disimpan langsung ke MariaDB melalui endpoint backend.

        // BACKEND SCRAPER -> MARIADB
        const SCRAPER_BACKEND_URL = 'http://127.0.0.1:8000';
        function setDbScrapeStatus(message, ok=false) {
            const el=document.getElementById('db-scrape-status');
            if(!el) return;
            el.textContent=message;
            el.className='rounded-lg border p-3 text-sm '+(ok?'border-emerald-200 bg-white text-emerald-800':'border-amber-200 bg-white text-amber-800');
        }
        async function checkScraperBackend() {
            setDbScrapeStatus('Memeriksa backend Python...');
            try {
                const r=await fetch(SCRAPER_BACKEND_URL+'/api/health');
                const data=await r.json();
                if(!r.ok) throw new Error(data.detail||'Backend tidak merespons');
                setDbScrapeStatus('Backend aktif. Status database: '+(data.database||'belum diketahui')+'.', true);
            } catch(e) {
                setDbScrapeStatus('Backend belum dapat dihubungi. Jalankan server dengan perintah: uvicorn app:app --host 127.0.0.1 --port 8000. Detail: '+(e.message||e));
            }
        }
        async function runScraperToMariaDB() {
            if(typeof currentAdminRole!=='undefined' && currentAdminRole!=='super') {
                setDbScrapeStatus('Hanya Admin Utama yang boleh menjalankan scraper.'); return;
            }
            const query=document.getElementById('db-scrape-query')?.value.trim();
            const area=document.getElementById('db-scrape-area')?.value;
            const limit=Number(document.getElementById('db-scrape-limit')?.value||30);
            const token=document.getElementById('db-scrape-token')?.value.trim();
            if(!query || !area || !token) { setDbScrapeStatus('Isi kata kunci, wilayah, dan token admin backend terlebih dahulu.'); return; }
            const btn=document.getElementById('db-scrape-run');
            if(btn){btn.disabled=true;btn.textContent='Sedang mengambil data...';}
            setDbScrapeStatus('Scraper berjalan di backend. Proses dapat memerlukan beberapa menit. Jangan tutup halaman.');
            try {
                const response=await fetch(SCRAPER_BACKEND_URL+'/api/scrape-maps', {
                    method:'POST', headers:{'Content-Type':'application/json','X-Admin-Token':token},
                    body:JSON.stringify({query, location:area, max_results:limit})
                });
                const data=await response.json().catch(()=>({detail:'Respons backend bukan JSON'}));
                if(!response.ok) throw new Error(data.detail||('HTTP '+response.status));
                setDbScrapeStatus('Selesai. Ditemukan '+data.found+' tempat; '+data.inserted+' data baru disimpan dan '+data.updated+' data diperbarui di MariaDB.', true);
                if(typeof showToast==='function') showToast('Data Google Maps tersimpan ke MariaDB.','success');
            } catch(e) {
                setDbScrapeStatus('Gagal: '+(e.message||e)+'. Pastikan backend aktif, token benar, database tersambung, dan akses jaringan tersedia.');
            } finally {
                if(btn){btn.disabled=false;btn.innerHTML='<i class="fa-solid fa-cloud-arrow-down mr-1"></i> Ambil Data & Simpan ke MariaDB';}
            }
        }

        document.addEventListener('DOMContentLoaded', () => { loadBannerContentSettings(); });
