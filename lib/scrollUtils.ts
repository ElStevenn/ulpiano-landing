/**
 * Utilidad centralizada para manejar el scroll suave a secciones
 */

/**
 * Opciones para el scroll a sección
 */
export interface ScrollToSectionOptions {
  /** Offset adicional desde la parte superior (por defecto 80px para el header) */
  offset?: number;
  /** Comportamiento del scroll (por defecto 'smooth') */
  behavior?: ScrollBehavior;
  /** Callback que se ejecuta después del scroll (útil para disparar eventos) */
  onAfterScroll?: () => void;
  /** Delay en ms antes de ejecutar el callback (por defecto 500ms) */
  callbackDelay?: number;
}

/**
 * Scroll suave a una sección por su ID
 * @param sectionId - ID de la sección destino
 * @param options - Opciones de scroll (offset, behavior, onAfterScroll)
 */
export function scrollToSection(
  sectionId: string,
  options: ScrollToSectionOptions = {}
): void {
  const {
    offset = 80,
    behavior = 'smooth',
    onAfterScroll,
    callbackDelay = 500,
  } = options;
  const element = document.getElementById(sectionId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior,
    });

    // Ejecutar callback después del scroll si está definido
    if (onAfterScroll) {
      setTimeout(() => {
        onAfterScroll();
      }, callbackDelay);
    }
  }
}

/**
 * Crea un handler de evento para scroll a sección
 * Útil para usar directamente en onClick de elementos <a>
 * @param sectionId - ID de la sección destino
 * @param options - Opciones de scroll (offset, behavior, onAfterScroll)
 * @returns Handler de evento React
 */
export function createScrollHandler(
  sectionId: string,
  options: ScrollToSectionOptions = {}
) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(sectionId, options);
  };
}
