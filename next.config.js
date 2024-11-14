module.exports = {
  async rewrites() {
    return [
      {
        source: '/enviar-mensagem',
        destination: 'http://localhost:3000/enviar-mensagem', // Redireciona a requisição para a porta 3001
      },
    ];
  },
};