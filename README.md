# 🧠 Awesome Todo

Proyecto de práctica enfocado en **Clean Architecture aplicada a frontend** usando React, TypeScript y testing moderno.

---

## 🎯 Objetivo

Explorar:

- Separación de capas (`core` vs `ui`)
- Dominio con comportamiento (DDD liviano)
- Casos de uso desacoplados
- Testing enfocado en lógica de negocio
- Independencia del framework

---

## 🧱 Estructura del proyecto
```
src
├── core
│   ├── domain          # Entidades y reglas de negocio
│   ├── application     # Casos de uso
│   ├── ports           # Interfaces (contratos)
│   └── infrastructure  # Implementaciones (repositorios, APIs)
│
└── ui
    └── react           # Componentes, hooks, controllers
```

---

## 🧠 Principios clave

- El **core no depende de UI**
- La **UI depende del core**
- El dominio contiene la lógica importante
- Los casos de uso orquestan, no deciden
- Infraestructura es intercambiable

---

## 🧪 Testing

### Tipos de test

- **Domain tests** → lógica pura (alta prioridad)
- **Use case tests** → orquestación
- **UI tests** → mínimos y enfocados

---

### Ejecutar tests

```bash
npm run test        # modo watch
npm run test:run    # ejecución única
npm run test:coverage