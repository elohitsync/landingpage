import React from 'react';
import { render, screen } from '@testing-library/react';
import Benefits from '../Benefits';

describe('Benefits component', () => {
  const t = (lang: string, key: string) => {
    const dict: Record<string, Record<string, string>> = {
      pt: {
        benefitsTitle: 'Benefícios da IA',
        benefit1Title: 'Acelere Resultados',
        benefit1Desc: 'Ganhe velocidade operacional com automação inteligente.',
        benefit2Title: 'Inovação Contínua',
        benefit2Desc: 'Implemente IA de ponta e mantenha-se à frente.',
        benefit3Title: 'Segurança',
        benefit3Desc: 'Soluções com foco em proteção de dados e compliance.',
      },
      en: {
        benefitsTitle: 'AI Benefits',
        benefit1Title: 'Accelerate Results',
        benefit1Desc: 'Gain operational speed with smart automation.',
        benefit2Title: 'Continuous Innovation',
        benefit2Desc: 'Implement cutting-edge AI and stay ahead.',
        benefit3Title: 'Security',
        benefit3Desc: 'Solutions focused on data protection and compliance.',
      },
    };
    return dict[lang][key];
  };

  it('renders titles and descriptions in Portuguese', () => {
    render(<Benefits lang="pt" t={t} />);
    expect(screen.getByText('Benefícios da IA')).toBeInTheDocument();
    expect(screen.getByText('Acelere Resultados')).toBeInTheDocument();
    expect(screen.getByText('Ganhe velocidade operacional com automação inteligente.')).toBeInTheDocument();
  });

  it('renders titles and descriptions in English', () => {
    render(<Benefits lang="en" t={t} />);
    expect(screen.getByText('AI Benefits')).toBeInTheDocument();
    expect(screen.getByText('Accelerate Results')).toBeInTheDocument();
    expect(screen.getByText('Gain operational speed with smart automation.')).toBeInTheDocument();
  });
});
