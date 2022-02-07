q('.img-prato img').addEventListener('mouseover', removerDNone)
q('.img-prato img').addEventListener('mouseout', addDNone)

q('.img-prato').addEventListener('click', expandirPrato)
q('#ceviche-expandido div.content div.textos img').addEventListener('click', addDNone)

q('#perfil div img').addEventListener('click', removerDNone)
q('#sidebar div img.fechar').addEventListener('click', addDNone)

q('#prato-receita img').addEventListener('mouseover', removerDNone)
q('#prato-receita img').addEventListener('mouseout', addDNone)


/*q('.img-prato').addEventListener('mouseover', mostrarVerFoto)
q('.img-prato').addEventListener('mouseout', esconderVerFoto)

q('#prato-receita').addEventListener('mouseover', mostrarVerReceita)
q('#prato-receita').addEventListener('mouseout', esconderVerReceita)*/
