export default function Page() {
  return (
    <div className="container">
      <h2>Appearance</h2>
      <p className="mb-2">Set or customize your preferences for the system</p>

      {/* Idioma */}
      <div className="language-container">
        <label className="label">Language</label>
        <div className="language-box">
          <span>English</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <p className="accent-text">Select the language of the platform</p>

      {/* Sección de temas */}
      <h3 className="font-medium mt-3">Interface theme</h3>
      <p>Customize your application appearance</p>
      <div className="theme-selector">
        <div className="theme-card theme-auto">Auto</div>
        <div className="theme-card theme-light theme-selected">
          <div className="checkmark">✔</div>
          Light
        </div>
        <div className="theme-card theme-dark">Dark</div>
      </div>

      {/* Sección de colores de acento */}
      <div className="accent-container">
        <div>
          <label className="block font-medium">Accent color</label>
          <p className="accent-text">Pick your platform’s main color</p>
        </div>
        <div className="color-selector">
          <div className="color-circle bg-red-400"></div>
          <div className="color-circle bg-yellow-400"></div>
          <div className="color-circle bg-green-500"></div>
          <div className="color-circle bg-blue-500"></div>
          <div className="color-circle bg-purple-500"></div>
        </div>
      </div>

      {/* Opciones de accesibilidad */}
      <div className="mt-3">
        <label className="toggle">
          <span className="toggle-label">Reduce motion</span>
          <div className="toggle-switch toggle-active"></div>
        </label>
        <label className="toggle">
          <span className="toggle-label">Auto play</span>
          <div className="toggle-switch toggle-active"></div>
        </label>
        <label className="toggle">
          <span className="toggle-label">High quality photo</span>
          <div className="toggle-switch toggle-inactive"></div>
        </label>
      </div>

      {/* Reset to Default */}
      <p className="reset-text">Reset to default</p>

      {/* Botones corregidos */}
      <div className="flex justify-between mt-4">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-primary">Save Preferences</button>
      </div>
    </div>
  );
}
