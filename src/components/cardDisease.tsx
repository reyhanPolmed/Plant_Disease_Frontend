import React from "react";

const CardDisease = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <a
                  className="flex items-center gap-2 text-xl font-bold text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined text-3xl">
                    grass
                  </span>
                  <span>LihatKebunku</span>
                </a>
                <nav className="hidden md:flex items-center gap-6">
                  <a
                    className="text-sm font-medium hover:text-primary transition-colors"
                    href="#"
                  >
                    Beranda
                  </a>
                  <a className="text-sm font-bold text-primary" href="#">
                    Identifikasi
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary transition-colors"
                    href="#"
                  >
                    Manajemen
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary transition-colors"
                    href="#"
                  >
                    Komunitas
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary transition-colors"
                    href="#"
                  >
                    Tentang
                  </a>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:block relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">
                    search
                  </span>
                  <input
                    className="form-input w-48 bg-input-light dark:bg-input-dark border-transparent focus:ring-primary focus:border-primary rounded-full pl-10 pr-4 py-2 text-sm"
                    placeholder="Search"
                    type="text"
                  />
                </div>
                <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                </button>
                <button>
                  <div
                    // 3. Kelas Tailwind CSS tetap sama seperti pada HTML asli
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    // 4. Atribut 'style' diubah menjadi objek JavaScript.
                    //    Properti CSS 'background-image' diubah menjadi camelCase 'backgroundImage'.
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOwBL-ofY2S6Dohpxtezi9F0iKlgtnitrL5XY3pSbRj61yG0CzTDPVWj1h1HT6f-qS-cHYjVhpX3dWjIeKDJhpCtC1j_qjo5IBm6Z-V1BMqs1F08goAwf7AgpjSjGpxowBl2bwO5Uohq7Gt-E4fy4aV6akJEiNKRyC7xMS6EI6-EDcoMkU8zxvh8JdYAD6OuyceIcfsTV87snKC_1nNXkorWPFIYer2RiGfb-zX0TJfC7ty6mhE25wGnwjp-LZIIJZrGWLMr4a1ck")`,
                    }}
                  >
                    {/* Konten di dalam div (jika ada) */}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-2">
                Daftar Penyakit dan Hama
              </h1>
              <p className="text-lg text-muted-light dark:text-muted-dark">
                Jelajahi, identifikasi, dan pelajari cara mengelola berbagai
                ancaman bagi tanaman Anda.
              </p>
            </div>
            <div className="mb-8 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark text-xl">
                search
              </span>
              <input
                className="form-input w-full bg-input-light dark:bg-input-dark border-border-light dark:border-border-dark focus:ring-primary focus:border-primary rounded-lg pl-12 pr-4 py-3 text-base"
                placeholder="Cari penyakit atau hama..."
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="group cursor-pointer flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <div
                    className="w-full h-40 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDADuRBuX6qWdHMoE4alCvEdE0Xd263A0_k1DSNjNLfFLzXGC6PYxL5FvpcVjr-UX9mTRXP1XIkYLHiu4EUYwCvklX9tjkfi6qBrlxjpporpGjkGLZWRC3KQMq2iEBiYMMu8kLeOvrtqUYlvNUUw0K9SkxjexZz_anMLEA2mxVfHmA0LNAuQjClGFXpXiqbwcaHX_M9J-g8GDgT7loVaYII5zQ1z0w1dipM94limlLL4o_FYizQYVMAMmT8zfEwj7OuAc1gceQISX8")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold uppercase bg-primary/80 text-white px-2 py-1 rounded">
                      Penyakit
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold mb-1">Bercak Daun</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-3">
                    Penyakit jamur umum yang menyebabkan munculnya bercak-bercak
                    gelap pada dedaunan tanaman.
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <div
                    className="w-full h-40 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDADuRBuX6qWdHMoE4alCvEdE0Xd263A0_k1DSNjNLfFLzXGC6PYxL5FvpcVjr-UX9mTRXP1XIkYLHiu4EUYwCvklX9tjkfi6qBrlxjpporpGjkGLZWRC3KQMq2iEBiYMMu8kLeOvrtqUYlvNUUw0K9SkxjexZz_anMLEA2mxVfHmA0LNAuQjClGFXpXiqbwcaHX_M9J-g8GDgT7loVaYII5zQ1z0w1dipM94limlLL4o_FYizQYVMAMmT8zfEwj7OuAc1gceQISX8")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold uppercase bg-primary/80 text-white px-2 py-1 rounded">
                      Hama
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold mb-1">Kutu Kebul</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-3">
                    Hama kecil bersayap yang menghisap getah tanaman dan dapat
                    menularkan virus.
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <div
                    className="w-full h-40 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDADuRBuX6qWdHMoE4alCvEdE0Xd263A0_k1DSNjNLfFLzXGC6PYxL5FvpcVjr-UX9mTRXP1XIkYLHiu4EUYwCvklX9tjkfi6qBrlxjpporpGjkGLZWRC3KQMq2iEBiYMMu8kLeOvrtqUYlvNUUw0K9SkxjexZz_anMLEA2mxVfHmA0LNAuQjClGFXpXiqbwcaHX_M9J-g8GDgT7loVaYII5zQ1z0w1dipM94limlLL4o_FYizQYVMAMmT8zfEwj7OuAc1gceQISX8")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold uppercase bg-primary/80 text-white px-2 py-1 rounded">
                      Penyakit
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold mb-1">Busuk Akar</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-3">
                    Kondisi fatal yang disebabkan oleh jamur di tanah yang
                    menyerang sistem perakaran.
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <div
                    className="w-full h-40 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDADuRBuX6qWdHMoE4alCvEdE0Xd263A0_k1DSNjNLfFLzXGC6PYxL5FvpcVjr-UX9mTRXP1XIkYLHiu4EUYwCvklX9tjkfi6qBrlxjpporpGjkGLZWRC3KQMq2iEBiYMMu8kLeOvrtqUYlvNUUw0K9SkxjexZz_anMLEA2mxVfHmA0LNAuQjClGFXpXiqbwcaHX_M9J-g8GDgT7loVaYII5zQ1z0w1dipM94limlLL4o_FYizQYVMAMmT8zfEwj7OuAc1gceQISX8")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold uppercase bg-primary/80 text-white px-2 py-1 rounded">
                      Hama
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold mb-1">Ulat Grayak</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-3">
                    Larva ngengat yang sangat rakus, memakan daun dan dapat
                    menyebabkan kerusakan parah.
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <div
                    className="w-full h-40 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDADuRBuX6qWdHMoE4alCvEdE0Xd263A0_k1DSNjNLfFLzXGC6PYxL5FvpcVjr-UX9mTRXP1XIkYLHiu4EUYwCvklX9tjkfi6qBrlxjpporpGjkGLZWRC3KQMq2iEBiYMMu8kLeOvrtqUYlvNUUw0K9SkxjexZz_anMLEA2mxVfHmA0LNAuQjClGFXpXiqbwcaHX_M9J-g8GDgT7loVaYII5zQ1z0w1dipM94limlLL4o_FYizQYVMAMmT8zfEwj7OuAc1gceQISX8")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold uppercase bg-primary/80 text-white px-2 py-1 rounded">
                      Penyakit
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold mb-1">Karat Daun</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-3">
                    Infeksi jamur yang menghasilkan bintik-bintik berwarna karat
                    pada daun tanaman.
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <div
                    className="w-full h-40 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDADuRBuX6qWdHMoE4alCvEdE0Xd263A0_k1DSNjNLfFLzXGC6PYxL5FvpcVjr-UX9mTRXP1XIkYLHiu4EUYwCvklX9tjkfi6qBrlxjpporpGjkGLZWRC3KQMq2iEBiYMMu8kLeOvrtqUYlvNUUw0K9SkxjexZz_anMLEA2mxVfHmA0LNAuQjClGFXpXiqbwcaHX_M9J-g8GDgT7loVaYII5zQ1z0w1dipM94limlLL4o_FYizQYVMAMmT8zfEwj7OuAc1gceQISX8")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold uppercase bg-primary/80 text-white px-2 py-1 rounded">
                      Hama
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold mb-1">Tungau Laba-Laba</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-3">
                    Hama mikroskopis yang membuat jaring halus dan menyebabkan
                    daun menguning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardDisease;
