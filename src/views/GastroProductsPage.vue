<template>
  <div class="medical-products">
    <div class="background-wrapper">
      <!-- Gastric Health Section -->
      <section class="product-section gastric">
        <div class="section-header">
          <div class="icon-wrapper">
            <img src="@icons/gastro.png" alt="Gastric Icon" />
          </div>
          <h2>Línea de Salud gástrica</h2>
        </div>
        
        <div class="products-grid">
          <div class="product-card">
            <img src="@products/desktop/png/sansflu14.png" alt="Sansflu 14" />
            <p class="product-desc">Caja con 14 y 28 tabletas 40 mg</p>
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/sansflu28.png" alt="Sansflu 28" />
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/ulsicral.png" alt="Ulsicral" />
            <p class="product-desc">Caja con frasco con 40 tabletas 1 g</p>
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/eiknoz.png" alt="Eiknoz" />
            <p class="product-desc">Caja con 10 y 20 sobres de 10 mL<br>Caja con frasco con 250 mL</p>
          </div>
        </div>
      </section>

      <!-- Hepatic Health Section -->
      <section class="product-section hepatic">
        <div class="section-header">
          <div class="icon-wrapper">
            <img src="" alt="Hepatic Icon" />
          </div>
          <h2>Línea de Salud hepática</h2>
        </div>
        
        <div class="products-grid">
          <div class="product-card">
            <img src="@products/desktop/png/neocholal-s.png" alt="Neocholal-S" />
            <p class="product-desc">Caja con envase con 14, 28 y 42 cápsulas de 45 mg</p>
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/kirruz10.png" alt="Kirruz 10" />
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/kirruz30.png" alt="Kirruz 30" />
            <p class="product-desc">Caja con 10 y 30 sobres de 3 g</p>
          </div>
        </div>
      </section>

      <!-- Intestinal Health Section -->
      <section class="product-section intestinal">
        <div class="section-header">
          <div class="icon-wrapper">
            <img src="" alt="Intestinal Icon" />
          </div>
          <h2>Línea de Salud intestinal y equilibrio</h2>
        </div>
        
        <div class="products-grid">
          <div class="product-card">
            <img src="@products/desktop/png/lunarium.png" alt="Lunarium" />
            <p class="product-desc">Caja con 14, 28 y 56 cápsulas<br>100 mg / 300 mg</p>
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/combispas.png" alt="Combispas" />
            <p class="product-desc">Caja con 30 tabletas<br>105 mg / 25 mg / 180 mg</p>
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/pregesix.png" alt="Pregesix" />
            <p class="product-desc">Caja con 30 tabletas<br>recubiertas 50 mg</p>
          </div>
          <div class="product-card">
            <img src="@products/desktop/png/lactipan.png" alt="Lactipan" />
            <p class="product-desc">Caja con 12 cápsulas de 311 mg</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="legal-footer">
        <p class="legal-text">
          {{ legalText }}
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const legalText = `Lunarium® Cápsulas Reg. Núm. 425M2014 SSA IV Eiknoz® Suspensión Reg. Núm. 035M2019, SSA VI Ulsicral® Tabletas Reg. Núm. 287M2007, SSA IV Kirruz® Granulado Reg. Núm. 026M2011, SSA IV Neocholal-S® Cápsulas Reg. Núm. 026P2015, SSA IV
Sansflu® Tabletas Reg. Núm. 039M2020, SSA IV Combispas® Tabletas Reg. Núm. 004P2019 SSA IV Pregesix® Tabletas Reg. Núm. 060M2020 SSA IV
Reporte las sospechas de reacción adversa a los correos: farmacovigilancia@cofepris.gob.mx y farmacovigilancia@megalabs.mx
Material exclusivo para profesional de la salud. Se prohíbe su distribución y el manejo inadecuado de los mismos responderá por los daños y repercusiones legales correspondientes al titular.
No de Aviso COFEPRIS: 2309042002C00371, 2314102002C00109`;
</script>

<style scoped>
.medical-products {
  width: 100%;
  min-height: 100vh;
}

.background-wrapper {
  background-image: url('@products/tablet/png/BOOK GAS 0924-2_page2_image1.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 2rem;
}

.product-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.9);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-card img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-desc {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.4;
}

.legal-footer {
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 0.5rem;
}

.legal-text {
  font-size: 0.75rem;
  color: #666;
  line-height: 1.5;
}

/* Specific section styles */
.gastric .section-header h2 {
  color: #2563eb;
}

.hepatic .section-header h2 {
  color: #16a34a;
}

.intestinal .section-header h2 {
  color: #dc2626;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .background-wrapper {
    padding: 1rem;
  }

  .product-section {
    padding: 1rem;
  }
}
</style>