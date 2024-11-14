import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { numero, mensagem } = req.body;

    try {
      // Aqui você faria a lógica para enviar a mensagem
      // Por exemplo, chamar a API do WhatsApp ou qualquer outro serviço

      console.log(`Enviando mensagem para ${numero}: ${mensagem}`);

      // Simula uma resposta bem-sucedida
      res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      res.status(500).json({ success: false, message: 'Erro ao enviar mensagem' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
