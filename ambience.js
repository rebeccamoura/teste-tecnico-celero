q('.img-prato img').addEventListener('mouseover', removerDNone)
q('.img-prato img').addEventListener('mouseout', addDNone)

q('.img-prato').addEventListener('click', expandirPrato)
q('#ceviche-expandido div.content div.textos img').addEventListener('click', addDNone)

q('#perfil div img').addEventListener('click', removerDNone)
q('#sidebar div img.fechar').addEventListener('click', addDNone)
q('#sidebar div p.fechar').addEventListener('click', addDNone)

q('#prato-receita img').addEventListener('mouseover', removerDNone)
q('#prato-receita img').addEventListener('mouseout', addDNone)



// Alterar ícones

qAll('footer div.redes-sociais img').forEach(imagem => imagem.addEventListener('mouseover', ativarIcone))

qAll('footer div.redes-sociais img').forEach(imagem => imagem.addEventListener('mouseout', desativarIcone))

// separa

qAll('div.option').forEach(div => div.addEventListener('mouseover', ativarIcone))

qAll('main div.mundo-gastronomico div.options div.option').forEach(div => div.addEventListener('mouseout', desativarIcone))

qAll('div.option').forEach(div => div.addEventListener('click', ativarDiv))

