import React, { useState, useEffect } from 'react'
import './App.css'
import logoImage from './assets/anh1/anhtest.png'
import logoAnh2 from './assets/anh2/anh2.png'

const App = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [activePage, setActivePage] = useState('home')

  // Navigation pages
  const navPages = [
    { id: 'home', title: 'Trang Chủ' },
    { id: 'about', title: 'Giới Thiệu' },
    { id: 'collections', title: 'Bộ Sưu Tập' },
    { id: 'experience', title: 'Trải Nghiệm' },
    { id: 'services', title: 'Dịch Vụ' },
    { id: 'blog', title: 'Tin Tức' },
    { id: 'contact', title: 'Liên Hệ' }
  ]

  // Menu data
  const menuData = [
    {
      id: 1,
      title: 'Áo Dài',
      items: ['Áo Dài Truyền Thống', 'Áo Dài Cách Tân', 'Áo Dài Cưới', 'Áo Dài Học Sinh']
    },
    {
      id: 2,
      title: 'Trang Sức',
      items: ['Nhẫn', 'Vòng Cổ', 'Hoa Tai', 'Lắc Tay']
    },
    {
      id: 3,
      title: 'Dịch Vụ',
      items: ['May Đo', 'Thiết Kế Riêng', 'Cho Thuê', 'Tư Vấn']
    }
  ]

  // Products/Collections data
  const collections = [
    {
      id: 1,
      name: 'Áo Dài Truyền Thống',
      description: 'Giữ trọn nét đẹp cổ điển Việt Nam',
      price: '1.500.000đ - 3.000.000đ',
      image: '🎎'
    },
    {
      id: 2,
      name: 'Áo Dài Cách Tân',
      description: 'Hiện đại, trẻ trung, dễ mặc',
      price: '1.200.000đ - 2.500.000đ',
      image: '👘'
    },
    {
      id: 3,
      name: 'Áo Dài Cưới',
      description: 'Sang trọng, lộng lẫy cho ngày trọng đại',
      price: '3.000.000đ - 8.000.000đ',
      image: '💍'
    },
    {
      id: 4,
      name: 'Áo Dài Học Sinh',
      description: 'Duyên dáng, thanh lịch cho tuổi học trò',
      price: '800.000đ - 1.500.000đ',
      image: '📚'
    },
    {
      id: 5,
      name: 'Áo Dài Lụa',
      description: 'Chất liệu cao cấp, mềm mại',
      price: '2.000.000đ - 5.000.000đ',
      image: '✨'
    },
    {
      id: 6,
      name: 'Áo Dài Thêu Tay',
      description: 'Nghệ thuật thủ công tinh xảo',
      price: '3.500.000đ - 7.000.000đ',
      image: '🧵'
    }
  ]

  // Blog/News data
  const blogPosts = [
    {
      id: 1,
      title: 'Lịch Sử Và Văn Hóa Áo Dài Việt Nam',
      excerpt: 'Khám phá hành trình phát triển của áo dài qua các thời kỳ lịch sử...',
      date: '20/01/2026',
      category: 'Văn Hóa'
    },
    {
      id: 2,
      title: 'Xu Hướng Áo Dài Xuân 2026',
      excerpt: 'Những phong cách và màu sắc đang được ưa chuộng nhất mùa xuân này...',
      date: '18/01/2026',
      category: 'Xu Hướng'
    },
    {
      id: 3,
      title: 'Cách Phối Đồ Với Áo Dài Hiện Đại',
      excerpt: 'Bí quyết mix-match áo dài với phụ kiện đương đại để tôn lên vẻ đẹp cá nhân...',
      date: '15/01/2026',
      category: 'Phong Cách'
    },
    {
      id: 4,
      title: 'Câu Chuyện Khách Hàng: Áo Dài Cưới Của Tôi',
      excerpt: 'Chia sẻ từ cô dâu Minh Anh về hành trình tìm kiếm chiếc áo dài cưới hoàn hảo...',
      date: '12/01/2026',
      category: 'Khách Hàng'
    }
  ]

  // Banner data
  const banners = [
    {
      id: 1,
      title: 'Xuân 2026 - Sắc Xuân Giao Hòa',
      subtitle: 'Bộ sưu tập áo dài mới nhất',
      color: 'linear-gradient(135deg, #FFB6C6 0%, #FF8FA3 100%)'
    },
    {
      id: 2,
      title: 'Ưu Đãi Đặc Biệt',
      subtitle: 'Giảm giá 20% toàn bộ trang sức',
      color: 'linear-gradient(135deg, #5FB3A1 0%, #4A9D8C 100%)'
    },
    {
      id: 3,
      title: 'May Đo Theo Yêu Cầu',
      subtitle: 'Thiết kế áo dài độc đáo riêng cho bạn',
      color: 'linear-gradient(135deg, #FFF8DC 0%, #FFE5B4 100%)'
    }
  ]

  // Auto-slide banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handlePrevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const handleNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const handleMouseEnter = (menuId) => {
    setActiveMenu(menuId)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => setActivePage('home')}>
            <img src={logoImage} alt="logo" className="logo-image" /> 
          </div>

          {/* Main Navigation Pages */}
          <div className="navbar-pages">
            {navPages.slice(0, 4).map((page) => (
              <button
                key={page.id}
                className={`nav-page-btn ${activePage === page.id ? 'active' : ''}`}
                onClick={() => setActivePage(page.id)}
              >
                {page.title}
              </button>
            ))}
          </div>

          {/* Menu Items (Dropdown) */}
          <div className="navbar-menu">
            {menuData.map((menu) => (
              <div
                key={menu.id}
                className="menu-item"
                onMouseEnter={() => handleMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="menu-button">
                  {menu.title}
                  <span className="menu-arrow">▼</span>
                </button>
                {activeMenu === menu.id && (
                  <div className="dropdown-menu">
                    {menu.items.map((item, index) => (
                      <a key={index} href="#" className="dropdown-item">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="nav-arrows">
            <button className="arrow-btn" onClick={handlePrevBanner}>‹</button>
            <button className="arrow-btn" onClick={handleNextBanner}>›</button>
          </div>

          {/* Search Bar */}
          <div className="navbar-search">
            <button 
              className="search-icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              🔍
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="search-input"
                autoFocus
              />
            )}
          </div>

          {/* Login/Register */}
          <div className="navbar-auth">
            <button 
              className="auth-btn"
              onClick={() => setIsLoginOpen(!isLoginOpen)}
            >
              <span className="auth-icon">👤</span>
              <span className="auth-text">Đăng nhập</span>
            </button>
            {isLoginOpen && (
              <div className="auth-dropdown">
                <a href="#" className="auth-link">Đăng nhập</a>
                <a href="#" className="auth-link">Đăng ký</a>
              </div>
            )}
          </div>

          {/* Shopping Cart */}
          <div className="navbar-cart">
            <button className="cart-btn">
              <span className="cart-icon">🛒</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="banner-section">
        <img src={logoAnh2} alt="banner" className='banner-background-image'/>
        <div 
          className="banner-slide"
          style={{ background: banners[currentBanner].color }}
        >
          <div className="banner-content">
            <h2 className="banner-title">{banners[currentBanner].title}</h2>
            <p className="banner-subtitle">{banners[currentBanner].subtitle}</p>
            <button className="banner-btn" onClick={() => setActivePage('collections')}>
              Khám Phá Ngay
            </button>
          </div>
        </div>
        
        {/* Banner Indicators */}
        <div className="banner-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentBanner ? 'active' : ''}`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>

        {/* Banner Navigation Arrows */}
        <button className="banner-arrow banner-arrow-left" onClick={handlePrevBanner}>
          ‹
        </button>
        <button className="banner-arrow banner-arrow-right" onClick={handleNextBanner}>
          ›
        </button>
      </section>

      {/* Main Content - Conditional Rendering Based on Active Page */}
      {activePage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <div className="brand-name">Sumire Store</div>
              <h1 className="hero-title">
                <span className="season">XUÂN 2026</span>
                <span className="product">ÁO DÀI VIỆT NAM</span>
              </h1>
              <p className="hero-description">
                Nơi vẻ đẹp truyền thống Việt Nam được tái hiện qua sắc màu dịu dàng, 
                phom dáng mềm mại và chất liệu bay bổng.
              </p>
              <div className="hero-buttons">
                <button onClick={() => setActivePage('collections')} className="btn btn-primary">
                  Khám phá bộ sưu tập
                </button>
                <button onClick={() => setActivePage('experience')} className="btn btn-secondary">
                  Thử áo dài trực tuyến
                </button>
              </div>
            </div>
            <div className="hero-decoration">
              <div className="flower-pattern">🌸</div>
            </div>
          </section>

          {/* Quick Brand Introduction */}
          <section className="brand-intro">
        <div className="container">
          <div className="section-icon">✨</div>
          <h2>Giới thiệu thương hiệu</h2>
          <p className="brand-description">
            <strong>Sumire Store</strong> là thương hiệu thời trang áo dài lấy cảm hứng từ vẻ đẹp Á Đông, 
            kết hợp hài hòa giữa tinh thần truyền thống và phong cách hiện đại.
          </p>
          <p>
            Mỗi thiết kế không chỉ là trang phục, mà còn là câu chuyện về văn hóa, 
            mùa xuân và nét duyên người phụ nữ Việt.
          </p>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection">
        <div className="container">
          <div className="section-icon">👘</div>
          <h2>Bộ sưu tập nổi bật</h2>
          <h3 className="collection-title">Xuân 2026 – Sắc Xuân Giao Hòa</h3>
          
          <div className="collection-grid">
            <div className="collection-item">
              <div className="item-image">🧵</div>
              <h4>Áo dài linen thêu tay</h4>
            </div>
            <div className="collection-item">
              <div className="item-image">✨</div>
              <h4>Áo dài voan – lụa nhẹ</h4>
            </div>
            <div className="collection-item">
              <div className="item-image">👗</div>
              <h4>Áo dài cách tân dáng suông</h4>
            </div>
            <div className="collection-item">
              <div className="item-image">🎊</div>
              <h4>Áo dài lễ – Tết – du xuân</h4>
            </div>
          </div>

          <div className="color-palette">
            <p className="palette-label">Bảng màu chủ đạo:</p>
            <div className="colors">
              <div className="color" style={{background: '#FFB6C6'}} title="Hồng phấn"></div>
              <div className="color" style={{background: '#8B1A1A'}} title="Đỏ rượu"></div>
              <div className="color" style={{background: '#5FB3A1'}} title="Xanh ngọc"></div>
              <div className="color" style={{background: '#90EE90'}} title="Lục non"></div>
              <div className="color" style={{background: '#FFF8DC'}} title="Kem ngà"></div>
            </div>
          </div>

          <a href="#" className="btn btn-primary">Xem toàn bộ áo dài</a>
        </div>
      </section>

      {/* Differentiators */}
      <section className="differentiators">
        <div className="container">
          <div className="section-icon">💡</div>
          <h2>Điểm khác biệt</h2>
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">✦</span>
              <p>Chất liệu chọn lọc, nhẹ – thoáng – dễ mặc</p>
            </div>
            <div className="feature">
              <span className="feature-icon">✦</span>
              <p>Thiết kế tôn dáng, phù hợp nhiều độ tuổi</p>
            </div>
            <div className="feature">
              <span className="feature-icon">✦</span>
              <p>Họa tiết thêu tay tinh tế</p>
            </div>
            <div className="feature">
              <span className="feature-icon">✦</span>
              <p>Dễ phối phụ kiện hiện đại</p>
            </div>
          </div>
        </div>
      </section>

      {/* AR Try-On Section */}
      <section id="try-on" className="try-on">
        <div className="container">
          <div className="section-icon">🧍‍♀️</div>
          <h2>Trải nghiệm thông minh</h2>
          <h3 className="subsection-title">Thử áo dài trực tuyến (AR / 3D)</h3>
          
          <div className="try-on-features">
            <div className="try-feature">
              <span className="check">✓</span>
              <p>Nhận diện dáng người</p>
            </div>
            <div className="try-feature">
              <span className="check">✓</span>
              <p>Gợi ý kiểu áo phù hợp</p>
            </div>
            <div className="try-feature">
              <span className="check">✓</span>
              <p>Phối màu & phụ kiện theo phong cách cá nhân</p>
            </div>
            <div className="try-feature">
              <span className="check">✓</span>
              <p>Xem trước khi đặt may hoặc mua</p>
            </div>
          </div>

          <a href="#" className="btn btn-primary">Trải nghiệm ngay</a>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="section-icon">🛍️</div>
          <h2>Dịch vụ</h2>
          <div className="services-grid">
            <div className="service">
              <p>May đo áo dài theo yêu cầu</p>
            </div>
            <div className="service">
              <p>Thiết kế cá nhân hóa</p>
            </div>
            <div className="service">
              <p>Cho thuê áo dài chụp ảnh – sự kiện</p>
            </div>
            <div className="service">
              <p>Tư vấn phong cách & phối đồ</p>
            </div>
          </div>
        </div>
      </section>

          {/* Testimonial */}
          <section className="testimonial">
            <div className="container">
              <div className="section-icon">💬</div>
              <h2>Cảm nhận khách hàng</h2>
              <blockquote className="quote">
                <p>"Áo dài nhẹ, form đẹp, mặc rất tôn dáng. Màu sắc đúng chất xuân."</p>
                <cite>— Khách hàng tại Quảng Ngãi</cite>
              </blockquote>
            </div>
          </section>
        </>
      )}

      {/* ========== ABOUT PAGE ========== */}
      {activePage === 'about' && (
        <section className="about-page">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Giới Thiệu</h1>
              <p className="page-subtitle">Câu chuyện thương hiệu Sumire Store</p>
            </div>

            {/* Brand Story */}
            <div className="about-section">
              <div className="section-icon">🌸</div>
              <h2>Câu Chuyện Thương Hiệu</h2>
              <p className="about-text">
                <strong>Sumire Store</strong> ra đời từ tình yêu sâu sắc với áo dài truyền thống Việt Nam 
                và mong muốn bảo tồn, phát huy nét đẹp văn hóa dân tộc trong thời đại hiện đại.
              </p>
              <p className="about-text">
                Tên "Sumire" (菫) trong tiếng Nhật có nghĩa là hoa violet - loài hoa tượng trưng cho 
                sự khiêm nhường, thanh lịch và vẻ đẹp tinh tế, đúng với triết lý thiết kế của chúng tôi.
              </p>
            </div>

            {/* Vision Mission Values */}
            <div className="vmv-grid">
              <div className="vmv-card">
                <div className="vmv-icon">🎯</div>
                <h3>Tầm Nhìn</h3>
                <p>
                  Trở thành thương hiệu áo dài hàng đầu Việt Nam, đưa áo dài Việt ra thế giới với 
                  phong cách hiện đại nhưng vẫn giữ trọn giá trị truyền thống.
                </p>
              </div>
              <div className="vmv-card">
                <div className="vmv-icon">💫</div>
                <h3>Sứ Mệnh</h3>
                <p>
                  Mang đến cho phụ nữ Việt những thiết kế áo dài tôn vinh vẻ đẹp duyên dáng, 
                  kết hợp hoàn hảo giữa truyền thống và xu hướng đương đại.
                </p>
              </div>
              <div className="vmv-card">
                <div className="vmv-icon">✨</div>
                <h3>Giá Trị Cốt Lõi</h3>
                <p>
                  Chất lượng - Tinh tế - Sáng tạo - Tận tâm. Mỗi sản phẩm đều được chăm chút 
                  từ khâu chọn vải đến từng đường kim mũi chỉ.
                </p>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="about-section philosophy">
              <div className="section-icon">🎨</div>
              <h2>Triết Lý Thiết Kế</h2>
              <div className="philosophy-content">
                <p className="about-text">
                  Chúng tôi tin rằng áo dài không chỉ là trang phục, mà là tác phẩm nghệ thuật thể hiện 
                  tâm hồn và cá tính người mặc. Mỗi thiết kế của Sumire Store đều mang trong mình:
                </p>
                <ul className="philosophy-list">
                  <li>✦ Sự tôn trọng với truyền thống văn hóa Việt Nam</li>
                  <li>✦ Sự cải tiến táo bạo để phù hợp với cuộc sống hiện đại</li>
                  <li>✦ Chất liệu cao cấp, thân thiện với làn da</li>
                  <li>✦ Đường cắt may tỉ mỉ, tôn dáng người Á Đông</li>
                  <li>✦ Màu sắc tinh tế, hòa quyện với xu hướng thế giới</li>
                </ul>
              </div>
            </div>

            {/* Journey */}
            <div className="about-section journey">
              <div className="section-icon">🚀</div>
              <h2>Hành Trình Phát Triển</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-content">
                    <h4>Khởi Đầu</h4>
                    <p>Sumire Store ra đời với xưởng nhỏ và đội ngũ 5 người</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2022</div>
                  <div className="timeline-content">
                    <h4>Phát Triển</h4>
                    <p>Mở rộng với 3 showroom tại Hà Nội, TP.HCM và Đà Nẵng</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h4>Đột Phá</h4>
                    <p>Ra mắt công nghệ thử áo dài trực tuyến AR/3D</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2026</div>
                  <div className="timeline-content">
                    <h4>Hiện Tại</h4>
                    <p>Phục vụ hơn 10,000 khách hàng, mở rộng quốc tế</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== COLLECTIONS PAGE ========== */}
      {activePage === 'collections' && (
        <section className="collections-page">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Bộ Sưu Tập</h1>
              <p className="page-subtitle">Khám phá đa dạng mẫu áo dài cho mọi dịp</p>
            </div>

            <div className="products-grid">
              {collections.map((collection) => (
                <div key={collection.id} className="product-card">
                  <div className="product-image">{collection.image}</div>
                  <div className="product-info">
                    <h3 className="product-name">{collection.name}</h3>
                    <p className="product-description">{collection.description}</p>
                    <p className="product-price">{collection.price}</p>
                    <div className="product-actions">
                      <button className="btn btn-primary">Xem Chi Tiết</button>
                      <button className="btn btn-secondary" onClick={() => setCartCount(cartCount + 1)}>
                        Thêm Giỏ Hàng
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Categories */}
            <div className="categories-section">
              <h2>Phân Loại Sản Phẩm</h2>
              <div className="categories-grid">
                <div className="category-card" onClick={() => alert('Xem áo dài truyền thống')}>
                  <span className="category-icon">🎎</span>
                  <h4>Truyền Thống</h4>
                  <p>Giữ trọn nét đẹp cổ điển</p>
                </div>
                <div className="category-card" onClick={() => alert('Xem áo dài cách tân')}>
                  <span className="category-icon">✨</span>
                  <h4>Cách Tân</h4>
                  <p>Hiện đại, trẻ trung</p>
                </div>
                <div className="category-card" onClick={() => alert('Xem áo dài cưới')}>
                  <span className="category-icon">💍</span>
                  <h4>Áo Dài Cưới</h4>
                  <p>Sang trọng, lộng lẫy</p>
                </div>
                <div className="category-card" onClick={() => alert('Xem áo dài học sinh')}>
                  <span className="category-icon">📚</span>
                  <h4>Học Sinh</h4>
                  <p>Thanh lịch, duyên dáng</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== EXPERIENCE PAGE ========== */}
      {activePage === 'experience' && (
        <section className="experience-page">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Trải Nghiệm Thông Minh</h1>
              <p className="page-subtitle">Công nghệ AR/3D - Thử áo dài không cần đến cửa hàng</p>
            </div>

            {/* AR Try-On Feature */}
            <div className="experience-hero">
              <div className="experience-visual">
                <div className="ar-demo">
                  <span className="ar-icon">📱</span>
                  <p className="ar-text">Tính năng AR/3D</p>
                </div>
              </div>
              <div className="experience-content">
                <h2>Thử Áo Dài Trực Tuyến</h2>
                <p>
                  Trải nghiệm công nghệ thực tế ảo (AR) và mô hình 3D tiên tiến, giúp bạn 
                  "thử" áo dài ngay tại nhà một cách chân thực nhất.
                </p>
                <button className="btn btn-primary">Bắt Đầu Thử Ngay</button>
              </div>
            </div>

            {/* Features */}
            <div className="experience-features">
              <div className="experience-feature-card">
                <span className="feature-icon-large">👤</span>
                <h3>Nhận Diện Dáng Người</h3>
                <p>
                  Công nghệ AI phân tích số đo cơ thể của bạn để đề xuất size và kiểu áo phù hợp nhất
                </p>
              </div>
              <div className="experience-feature-card">
                <span className="feature-icon-large">🎨</span>
                <h3>Gợi Ý Phối Màu</h3>
                <p>
                  Hệ thống tư vấn màu sắc dựa trên tông da, sở thích và phong cách cá nhân
                </p>
              </div>
              <div className="experience-feature-card">
                <span className="feature-icon-large">💎</span>
                <h3>Phối Phụ Kiện</h3>
                <p>
                  Thử nghiệm kết hợp áo dài với các phụ kiện như khăn, túi, giày, trang sức
                </p>
              </div>
              <div className="experience-feature-card">
                <span className="feature-icon-large">🔄</span>
                <h3>Xem 360°</h3>
                <p>
                  Xoay xem từ mọi góc độ, phóng to chi tiết để quan sát kỹ lưỡng trước khi quyết định
                </p>
              </div>
            </div>

            {/* Smart Recommendations */}
            <div className="smart-recommendations">
              <h2>Tư Vấn Thông Minh</h2>
              <div className="recommendation-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Nhập Thông Tin</h4>
                  <p>Chiều cao, cân nặng, vòng ngực, vòng eo, vòng mông</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Phân Tích AI</h4>
                  <p>Hệ thống phân tích và đề xuất kiểu áo phù hợp</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Thử & Chọn</h4>
                  <p>Thử nhiều mẫu, so sánh và chọn áo yêu thích</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>Đặt Hàng</h4>
                  <p>Đặt may hoặc mua sẵn, giao hàng tận nơi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== SERVICES PAGE ========== */}
      {activePage === 'services' && (
        <section className="services-page">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Dịch Vụ</h1>
              <p className="page-subtitle">Giải pháp toàn diện cho mọi nhu cầu áo dài</p>
            </div>

            <div className="services-detailed">
              <div className="service-card-detailed">
                <div className="service-icon-large">✂️</div>
                <h3>May Đo Theo Yêu Cầu</h3>
                <p className="service-desc">
                  Đo size chính xác, tư vấn thiết kế chi tiết, may đo hoàn toàn theo số đo 
                  và mong muốn của bạn. Thời gian hoàn thành: 7-14 ngày.
                </p>
                <ul className="service-features">
                  <li>✓ Đo size miễn phí tại showroom hoặc tại nhà</li>
                  <li>✓ Chọn vải, màu sắc, họa tiết theo ý thích</li>
                  <li>✓ Tư vấn kiểu dáng phù hợp với dáng người</li>
                  <li>✓ Sửa đổi miễn phí nếu chưa vừa ý</li>
                </ul>
                <p className="service-price">Giá từ: 1.500.000đ</p>
                <button className="btn btn-primary">Đặt Lịch May Đo</button>
              </div>

              <div className="service-card-detailed">
                <div className="service-icon-large">🎨</div>
                <h3>Thiết Kế Cá Nhân Hóa</h3>
                <p className="service-desc">
                  Làm việc trực tiếp với đội ngũ thiết kế để tạo ra chiếc áo dài độc nhất vô nhị, 
                  chỉ dành riêng cho bạn.
                </p>
                <ul className="service-features">
                  <li>✓ Tư vấn 1-1 với nhà thiết kế</li>
                  <li>✓ Sketch thiết kế chi tiết</li>
                  <li>✓ Họa tiết thêu tay hoặc in độc quyền</li>
                  <li>✓ Chỉnh sửa không giới hạn cho đến khi hài lòng</li>
                </ul>
                <p className="service-price">Giá từ: 3.000.000đ</p>
                <button className="btn btn-primary">Tư Vấn Thiết Kế</button>
              </div>

              <div className="service-card-detailed">
                <div className="service-icon-large">📸</div>
                <h3>Cho Thuê Áo Dài</h3>
                <p className="service-desc">
                  Dịch vụ cho thuê áo dài cao cấp phục vụ chụp ảnh, sự kiện, lễ hội. 
                  Đa dạng mẫu mã, size đầy đủ.
                </p>
                <ul className="service-features">
                  <li>✓ Hơn 200 mẫu áo dài để lựa chọn</li>
                  <li>✓ Giặt ủi, bảo quản chuyên nghiệp</li>
                  <li>✓ Phụ kiện đi kèm (nón, túi, giày)</li>
                  <li>✓ Thuê linh hoạt theo ngày/tuần</li>
                </ul>
                <p className="service-price">Giá từ: 300.000đ/ngày</p>
                <button className="btn btn-primary">Xem Áo Cho Thuê</button>
              </div>

              <div className="service-card-detailed">
                <div className="service-icon-large">💁</div>
                <h3>Tư Vấn Phong Cách</h3>
                <p className="service-desc">
                  Stylist chuyên nghiệp tư vấn cách phối áo dài với phụ kiện, trang điểm, 
                  làm tóc phù hợp với từng sự kiện.
                </p>
                <ul className="service-features">
                  <li>✓ Phân tích phong cách cá nhân</li>
                  <li>✓ Tư vấn màu sắc phù hợp với tông da</li>
                  <li>✓ Gợi ý phối đồ cho từng dịp cụ thể</li>
                  <li>✓ Mua sắm cùng stylist (nếu cần)</li>
                </ul>
                <p className="service-price">Giá: 500.000đ/buổi</p>
                <button className="btn btn-primary">Đặt Lịch Tư Vấn</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== BLOG PAGE ========== */}
      {activePage === 'blog' && (
        <section className="blog-page">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Tin Tức & Cảm Hứng</h1>
              <p className="page-subtitle">Khám phá thế giới áo dài Việt</p>
            </div>

            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <span className="blog-category-badge">{post.category}</span>
                    📰
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      <span className="blog-date">📅 {post.date}</span>
                      <a href="#" className="blog-read-more">Đọc tiếp →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Blog Categories */}
            <div className="blog-categories">
              <h2>Chủ Đề</h2>
              <div className="blog-category-tags">
                <button className="category-tag active">Tất cả</button>
                <button className="category-tag">Văn Hóa</button>
                <button className="category-tag">Xu Hướng</button>
                <button className="category-tag">Phong Cách</button>
                <button className="category-tag">Khách Hàng</button>
                <button className="category-tag">Hậu Trường</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== CONTACT PAGE ========== */}
      {activePage === 'contact' && (
        <section className="contact-page">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Liên Hệ</h1>
              <p className="page-subtitle">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
            </div>

            <div className="contact-content">
              {/* Contact Info */}
              <div className="contact-info-section">
                <div className="contact-card">
                  <span className="contact-icon">📍</span>
                  <h3>Địa Chỉ Showroom</h3>
                  <p><strong>Hà Nội:</strong> 123 Phố Huế, Hai Bà Trưng</p>
                  <p><strong>TP.HCM:</strong> 456 Nguyễn Huệ, Quận 1</p>
                  <p><strong>Đà Nẵng:</strong> 789 Trần Phú, Hải Châu</p>
                </div>

                <div className="contact-card">
                  <span className="contact-icon">📞</span>
                  <h3>Hotline</h3>
                  <p><a href="tel:0123456789">0123 456 789</a></p>
                  <p><a href="tel:0987654321">0987 654 321</a></p>
                  <p>Thời gian: 8:00 - 21:00 hàng ngày</p>
                </div>

                <div className="contact-card">
                  <span className="contact-icon">📧</span>
                  <h3>Email</h3>
                  <p><a href="mailto:info@sumirestore.vn">info@sumirestore.vn</a></p>
                  <p><a href="mailto:support@sumirestore.vn">support@sumirestore.vn</a></p>
                  <p>Phản hồi trong 24h</p>
                </div>

                <div className="contact-card">
                  <span className="contact-icon">💬</span>
                  <h3>Mạng Xã Hội</h3>
                  <p><a href="#">Facebook: @SumireStore</a></p>
                  <p><a href="#">Instagram: @sumire.store</a></p>
                  <p><a href="#">Shopee: Sumire Official</a></p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-section">
                <h2>Gửi Tin Nhắn Cho Chúng Tôi</h2>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Họ và Tên *</label>
                    <input type="text" id="name" placeholder="Nguyễn Văn A" required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" placeholder="email@example.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Số Điện Thoại</label>
                      <input type="tel" id="phone" placeholder="0123 456 789" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Chủ Đề</label>
                    <select id="subject">
                      <option>Tư vấn sản phẩm</option>
                      <option>Đặt may đo</option>
                      <option>Cho thuê áo dài</option>
                      <option>Khiếu nại/Góp ý</option>
                      <option>Khác</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Nội Dung *</label>
                    <textarea id="message" rows="5" placeholder="Nhập nội dung..." required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Gửi Tin Nhắn</button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="map-section">
              <h2>Bản Đồ</h2>
              <div className="map-placeholder">
                <p>🗺️ Google Maps sẽ hiển thị ở đây</p>
                <p className="map-note">(Tích hợp Google Maps API trong phiên bản production)</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Footer */}
      <footer className="footer">
        <div className="container">
          <div className="section-icon">📩</div>
          <h2>Kết nối với chúng tôi</h2>
          <div className="contact-info">
            <p className="brand-name-footer">Sumire Store – Áo Dài Việt</p>
            <p>📍 Việt Nam</p>
            <p>📞 Hotline: 0xxx xxx xxx</p>
            <p>📧 Email: info@sumirestore.vn</p>
          </div>
          <div className="social-links">
            <a href="#">Facebook</a>
            <span>·</span>
            <a href="#">Instagram</a>
            <span>·</span>
            <a href="#">Shopee</a>
          </div>
          <p className="copyright">© 2026 Sumire Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
