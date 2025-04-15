# Migração para Astro

Este projeto é a versão migrada da sua landing page para o framework Astro, conforme as melhores práticas do Vibe Coding e o prompt mestre.

## Como rodar localmente

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Rode o projeto em modo desenvolvimento:
   ```sh
   npm run dev
   ```
3. Para gerar a build estática:
   ```sh
   npm run build
   ```
4. O conteúdo final estará na pasta `dist` para deploy estático.

## Estrutura sugerida

- `src/components/sections/` — Componentes de sessões da landing page
- `src/components/ui/` — Componentes de UI reutilizáveis
- `src/hooks/` — Hooks customizados (React)
- `src/lib/` — Funções utilitárias
- `src/pages/` — Páginas Astro (`.astro`)
- `public/` — Assets estáticos (imagens, fontes)

## Observações
- Componentes React são suportados em Astro e podem ser usados com diretivas como `client:load`.
- TailwindCSS e outras integrações já estão preparadas via configuração padrão do Astro.
- Siga as recomendações de segurança, acessibilidade e performance do Vibe Coding.

Se precisar de exemplos de uso ou de configuração, consulte a documentação Astro: https://docs.astro.build/pt/
