## Background and Motivation
- Landing page deve mostrar casos reais com imagens; precisamos colocar as fotos `antes1.webp` e `depois1.webp` no card de transformações.

## Key Challenges and Analysis
- Garantir que o layout do card comporte imagens reais mantendo responsividade.
- Usar assets existentes em `public/` sem quebrar os slides.

## High-level Task Breakdown
- [x] Permitir que o card de transformação aceite imagens antes/depois (dados + renderização). *Sucesso:* imagens aparecem quando fornecidas, mantendo layout.
- [x] Ajustar estilos para as imagens (tamanhos/cover/borda) preservando responsividade. *Sucesso:* imagens preenchendo área sem distorção; placeholders intactos para casos sem imagem.
- [x] Verificar build/lint. *Sucesso:* `npm run lint` ou equivalente sem erros.

## Project Status Board
- [x] Adicionar suporte a imagens antes/depois no card de transformações

## Current Status / Progress Tracking
- Executor: implementado suporte às imagens `antes1.webp`/`depois1.webp` no primeiro card, com estilos ajustados; lint ok.

## Executor's Feedback or Assistance Requests
- Nenhuma no momento.

## Lessons
- Ler os arquivos antes de editar (evita sobrescrever conteúdo existente).

