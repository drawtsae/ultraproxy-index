# NetProxy Index V2

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)

**Landing Page hiện đại cho dịch vụ Proxy chất lượng cao**

[Demo](https://netproxy-index-v2.pages.dev) • [Hệ thống đại lý](https://seller.prx.network/) • [API Documentation](https://api.prx.network)

</div>

---

## Giới thiệu

NetProxy Index V2 là landing page được xây dựng với công nghệ hiện đại, tối ưu hiệu suất và SEO. Hỗ trợ đa ngôn ngữ (Tiếng Việt & English) với giao diện đẹp mắt và trải nghiệm người dùng mượt mà.

### Tính năng nổi bật

- **Đa ngôn ngữ (i18n)** - Hỗ trợ Tiếng Việt và English với `next-intl`
- **Hiệu ứng mượt mà** - Framer Motion, GSAP, Particles
- **Responsive Design** - Tương thích mọi thiết bị
- **SEO Optimized** - Cấu trúc chuẩn SEO
- **Dark Theme** - Giao diện tối hiện đại
- **Edge Runtime** - Tối ưu cho Cloudflare Pages

---

## Cấu trúc dự án

```
netproxy-index-v2/
├── app/
│   ├── [locale]/          # Routes theo ngôn ngữ
│   ├── fonts/             # Font files
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── Header/            # Navigation
│   ├── Hero/              # Hero section
│   ├── Pricing/           # Bảng giá
│   ├── FAQs/              # Câu hỏi thường gặp
│   ├── Footer/            # Footer
│   └── ui/                # UI components (shadcn/ui)
├── messages/
│   ├── en.json            # English translations
│   └── vi.json            # Vietnamese translations
├── i18n/                  # i18n configuration
├── lib/                   # Utilities
└── public/                # Static assets
```

---

## Hướng dẫn cài đặt

### Yêu cầu hệ thống

- Node.js 18.17 trở lên
- pnpm (khuyến nghị) hoặc npm/yarn

### Bước 1: Clone repository

```bash
git clone https://github.com/lebachhiep/netproxy-index-v2.git
cd netproxy-index-v2
```

### Bước 2: Cài đặt dependencies

```bash
pnpm install
# hoặc
npm install
```

### Bước 3: Cấu hình môi trường

Tạo file `.env.local` từ template:

```bash
cp .env.example .env.local
```

Nội dung file `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.prx.network
```

### Bước 4: Chạy development server

```bash
pnpm dev
# hoặc
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

---

## Deploy lên Cloudflare Pages

### Phương pháp 1: Kết nối trực tiếp với GitHub (Khuyến nghị)

#### Bước 1: Đăng nhập Cloudflare Dashboard

1. Truy cập [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Đăng nhập hoặc tạo tài khoản mới

#### Bước 2: Tạo Pages Project

1. Vào menu **Workers & Pages** từ sidebar
2. Click **Create** > **Pages** > **Connect to Git**
3. Chọn **GitHub** và authorize Cloudflare
4. Chọn repository `lebachhiep/netproxy-index-v2`

#### Bước 3: Cấu hình Build Settings

| Setting | Value |
|---------|-------|
| **Framework preset** | `Next.js` |
| **Build command** | `npx @cloudflare/next-on-pages@1` |
| **Build output directory** | `.vercel/output/static` |
| **Node.js version** | `18` (hoặc cao hơn) |

#### Bước 4: Cấu hình Environment Variables

Click **Add variable** và thêm:

| Variable Name | Value |
|---------------|-------|
| `NEXT_PUBLIC_API_BASE_URL` | `https://api.prx.network` |
| `NODE_VERSION` | `18` |

#### Bước 5: Deploy

1. Click **Save and Deploy**
2. Đợi build hoàn tất (khoảng 2-5 phút)
3. Truy cập URL được cung cấp (ví dụ: `netproxy-index-v2.pages.dev`)

---

### Phương pháp 2: Deploy thủ công với Wrangler CLI

#### Bước 1: Cài đặt Wrangler

```bash
npm install -g wrangler
```

#### Bước 2: Đăng nhập Cloudflare

```bash
wrangler login
```

#### Bước 3: Build project

```bash
pnpm build
# hoặc
npm run build
```

#### Bước 4: Deploy

```bash
npx @cloudflare/next-on-pages
wrangler pages deploy .vercel/output/static --project-name=netproxy-index-v2
```

---

### Cấu hình Custom Domain (Tùy chọn)

1. Trong Cloudflare Pages project, vào tab **Custom domains**
2. Click **Set up a custom domain**
3. Nhập domain của bạn (ví dụ: `proxy.yourdomain.com`)
4. Làm theo hướng dẫn cấu hình DNS

---

## Tích hợp Hệ thống Đại lý (Reseller)

### Giới thiệu

Hệ thống đại lý **PRX Seller Portal** cho phép bạn quản lý và bán proxy với thương hiệu riêng. Landing page này được thiết kế để kết hợp hoàn hảo với hệ thống đại lý.

### Truy cập Seller Portal

**URL:** [https://seller.prx.network/](https://seller.prx.network/)

### Tính năng Seller Portal

| Tính năng | Mô tả |
|-----------|-------|
| **Dashboard** | Tổng quan doanh thu, đơn hàng, khách hàng |
| **Quản lý sản phẩm** | Tạo gói proxy riêng, định giá linh hoạt |
| **Quản lý khách hàng** | Theo dõi khách hàng, lịch sử mua hàng |
| **Báo cáo** | Thống kê chi tiết, xuất báo cáo |
| **API Integration** | API để tích hợp với website riêng |
| **White-label** | Tùy chỉnh thương hiệu, logo |

### Quy trình tích hợp

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│  Landing Page   │ ───► │  Seller Portal  │ ───► │   PRX API       │
│  (Index V2)     │      │  seller.prx.net │      │  api.prx.network│
└─────────────────┘      └─────────────────┘      └─────────────────┘
     │                         │                        │
     ▼                         ▼                        ▼
  Giới thiệu              Quản lý đại lý          Xử lý proxy
  Thu hút KH              Tạo đơn hàng            Cấp phát IP
```

### Các bước bắt đầu

1. **Đăng ký tài khoản đại lý** tại [seller.prx.network](https://seller.prx.network/)
2. **Nạp tiền** vào tài khoản để bắt đầu
3. **Tạo gói sản phẩm** với giá bán riêng
4. **Deploy landing page** với thông tin của bạn
5. **Tích hợp API** (nếu cần tự động hóa)

### Tùy chỉnh Landing Page cho đại lý

Chỉnh sửa các file sau để cá nhân hóa:

```bash
# Logo và hình ảnh
public/images/

# Nội dung đa ngôn ngữ
messages/vi.json
messages/en.json

# Thông tin liên hệ, giá cả
components/Pricing/
components/Contact/
components/Footer/
```

---

## Scripts có sẵn

| Command | Description |
|---------|-------------|
| `pnpm dev` | Chạy development server |
| `pnpm build` | Build production |
| `pnpm start` | Chạy production server |
| `pnpm lint` | Kiểm tra lỗi ESLint |

---

## Công nghệ sử dụng

| Công nghệ | Phiên bản | Mô tả |
|-----------|-----------|-------|
| [Next.js](https://nextjs.org/) | 16.0 | React Framework |
| [React](https://react.dev/) | 19.2 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations |
| [GSAP](https://greensock.com/gsap/) | 3.x | Advanced Animations |
| [next-intl](https://next-intl-docs.vercel.app/) | 4.x | Internationalization |
| [Radix UI](https://www.radix-ui.com/) | Latest | Headless UI Components |
| [Lenis](https://lenis.studiofreight.com/) | 1.x | Smooth Scrolling |

---

## Hỗ trợ

- **Email:** support@prx.network
- **Telegram:** [@netproxyvn](https://t.me/netproxyvn)
- **Seller Portal:** [seller.prx.network](https://seller.prx.network/)

---

## License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

<div align="center">

**Được phát triển bởi [NetProxy Team](https://prx.network)**

</div>
