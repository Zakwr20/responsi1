# SEPATU BATAK

**Sepatu BATAK** untuk layanan **daftar barang cuci sepatu**, dibangun menggunakan **Node.js** dan **Express.js**, dengan penyimpanan data di **Supabase**.  
API ini mendukung operasi **CRUD (Create, Read, Update, Delete)** serta fitur **filter status** seperti `GET /items?status=Selesai`.

---

## Tujuan Proyek
Proyek ini dibuat untuk memenuhi tugas pembuatan **REST API sederhana** menggunakan Node.js dan Express.js dengan database eksternal (Supabase), serta deployment ke Vercel.

API ini dikembangkan untuk memudahkan pengguna atau admin dalam:
- Menambahkan data sepatu yang sedang dalam proses pencucian. 
- Menampilkan daftar seluruh sepatu, dengan opsi penyaringan berdasarkan status..  
- Memperbarui informasi atau status proses pencucian sepatu.
- Menghapus data sepatu yang telah selesai dicuci.

---

## Fitur Utama

| Fitur | Deskripsi |
|-------|------------|
| ➕ **Create** | Tambah data sepatu baru ke daftar cucian |
| 📋 **Read** | Ambil semua data sepatu berdasarkan status |
| ✏️ **Update** | Ubah informasi cucian sepatu |
| ❌ **Delete** | Hapus data sepatu dari daftar |
| 🔍 **Filter by Status** | Contoh: `GET /items?status=Selesai` |

---

## 🧱 Struktur Data

Data disimpan di **Supabase** dengan struktur tabel `items` seperti berikut:

| Kolom | Tipe Data | Deskripsi |
|--------|------------|-----------|
| `id` | integer (auto increment) | ID unik untuk tiap sepatu |
| `nama_customer` | varchar | Nama pemilik sepatu |
| `tipe_sepatu` | varchar | Jenis sepatu yang dicuci |
| `status` | varchar | Status pengerjaan (misal: "Menunggu", "Proses", "Selesai") |
| `tanggal_masuk` | date | Tanggal sepatu diterima |
| `tanggal_selesai` | date (nullable) | Tanggal sepatu selesai dicuci |

---

## Contoh Request

GET /item

Response:

```
[
  {
    "id": 4,
    "customer_name": "zaki",
    "tipe_sepatu": "crocs",
    "tipe_servis": "cuci",
    "tanggal_masuk": "2025-10-23T18:02:26.224702+00:00",
    "status": "Diterima",
    "price": 5000
  }
]

## 🔗 Endpoint API

### 1. **GET /item**
Ambil seluruh daftar sepatu.  
Tambahkan parameter `status` untuk memfilter data.

## 🚀 Contoh Request dan Response

**Endpoint Utama:** '[https://responsi1-lldi.vercel.app/api/item]'

