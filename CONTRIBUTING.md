# Berkontribusi ke Vibe Coding Starter Kit Indonesia 🚀

Terima kasih sudah tertarik berkontribusi! Proyek ini ada untuk membuat vibe coding bisa diakses oleh semua orang Indonesia — dan kamu bisa membantu.

## Cara Berkontribusi

### 🐛 Melaporkan Bug atau Masalah

Buka [issue baru](https://github.com/rahmaagrn/vibe-coding-id/issues) dan jelaskan:
- Apa yang terjadi
- Apa yang seharusnya terjadi
- Di halaman mana masalah itu muncul
- Screenshot (kalau bisa)

### 📝 Menambah atau Memperbaiki Konten

Setiap halaman tutorial ada di folder `src/content/docs/`. Formatnya MDX (Markdown + JSX).

1. Fork repo
2. Clone fork kamu
3. Buat branch: `git checkout -b konten-baru`
4. Edit atau tambah file `.mdx` di folder yang sesuai
5. Commit: `git commit -m "feat: tambah tutorial [judul]"`
6. Push: `git push origin konten-baru`
7. Buka Pull Request ke repo utama

### 🌐 Menambah Istilah ke Glossary

Edit file `src/components/JargonTooltip.astro`, cari bagian `const glossary`, dan tambah entry baru:

```js
"istilah-kamu": {
  term: "Nama Istilah",
  definition: "Penjelasan dalam bahasa Indonesia",
  example: "Contoh penggunaan (opsional)"
}
```

### 📖 Template Halaman Baru

```mdx
---
title: Judul Halaman
description: Deskripsi singkat untuk SEO
---

Tulis konten di sini dalam bahasa Indonesia.
Gunakan **bold** untuk penekanan dan `kode` untuk istilah teknis.

> Quote untuk poin penting
```

### 🎨 Menambahkan Gambar

Letakkan gambar di folder `src/assets/` dan referensi dari MDX:

```mdx
![alt text](../../assets/nama-file.png)
```

## Label Issue

| Label | Arti |
|-------|------|
| `pemula-friendly` | Cocok untuk kontributor pertama |
| `konten-baru` | Permintaan tutorial atau halaman baru |
| `perbaikan` | Bug atau kesalahan konten |
| `diskusi` | Butuh diskusi sebelum dikerjakan |

## Pedoman Konten

1. **Gunakan bahasa Indonesia yang mudah dipahami** — hindari jargon yang tidak perlu
2. **Pendekatan pemula** — jelaskan seperti sedang bicara dengan teman yang belum pernah coding
3. **Sertakan contoh** — setiap konsep lebih mudah dipahami dengan contoh nyata
4. **Test dulu sebelum PR** — pastikan tutorial yang kamu tulis benar-benar bisa diikuti
5. **Satu fokus per halaman** — jangan campur beberapa topik dalam satu halaman

## Code of Conduct

- Hormati sesama kontributor
- Kritik yang membangun, bukan menjatuhkan
- Tujuan kita sama: membuat vibe coding accessible untuk semua orang Indonesia

---

**Ada pertanyaan?** Buka [discussion](https://github.com/rahmaagrn/vibe-coding-id/discussions) atau kirim issue. Kami dengan senang hati membantu! 🎉
