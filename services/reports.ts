export type Report = {
  titulo: string
  descricao?: string
  grupo?: string
  icone?: string
  url: string,
  linkVoltar?: string,
}

const REPORTS: Record<string, Report> = {

  farmacia: {
    titulo: "Indicadores Farmácia",
    descricao: "Painel com indicadores e métricas da Farmácia",
    grupo: "Operacional",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/assistencial",
    icone: "Pill",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZDkyMjIzMTktM2IwOC00MzA5LTk2YmEtN2Q2MmI1MTI2ZWZlIiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  gerenciamentoLeitos: {
    titulo: "Gerenciamento de Leitos",
    descricao: "Acompanhamento da ocupação e gestão de leitos",
    grupo: "Assistencial",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/assistencial",
    icone: "Bed",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYTQxOTVjYjAtMjk0Yi00YmE2LTg1NDUtNmEzZmRlNTk3NTljIiwidCI6IjgzZDYzMDg1LTYxMDgtNGZiZS05ZjgxLTBkZjgzNmQ0YjRlOCJ9",
  },

  horasExtras: {
    titulo: "Horas Extras",
    descricao: "Indicadores de horas extras e jornada dos colaboradores",
    grupo: "RH",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/adm",
    icone: "Clock3",
    url: "https://app.powerbi.com/view?r=eyJrIjoiODdmNmIwOGEtOTY1YS00NjgxLTkyZjUtYTdlNjE3OWMxNTI4IiwidCI6IjgzZDYzMDg1LTYxMDgtNGZiZS05ZjgxLTBkZjgzNmQ0YjRlOCJ9",
  },

  indicadoresEstrategicos: {
    titulo: "Indicadores Estratégicos",
    descricao: "KPIs e indicadores estratégicos da instituição",
    grupo: "Gestão",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/adm",
    icone: "Target",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZTljYmVlMDktNjJlYS00MTI0LTgwNjQtY2RkZmEzYjk1ODY5IiwidCI6IjgzZDYzMDg1LTYxMDgtNGZiZS05ZjgxLTBkZjgzNmQ0YjRlOCJ9",
  },
  //http://localhost:3002/?bi=produtividadePAConvenios
  produtividadePAConvenios: {
    titulo: "Produtividade PA Convênios",
    descricao: "Produtividade do Pronto Atendimento por convênios",
    grupo: "Assistencial",
     linkVoltar: "https://tibene2022.wixsite.com/novabene/adm",
    icone: "Activity",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNTZiMWU5MjYtZmVjOC00YzU4LTg1YTEtNzRlZmExYmE4NTVhIiwidCI6IjgzZDYzMDg1LTYxMDgtNGZiZS05ZjgxLTBkZjgzNmQ0YjRlOCJ9",
  },
  qualidadeCirurgias: {
    titulo: "Qualidade — Indicadores Cirurgias",
    descricao: "Indicadores de qualidade e desempenho das cirurgias",
    grupo: "Qualidade",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/assistencial",
    icone: "Scissors",
    url: "https://app.powerbi.com/view?r=eyJrIjoiY2Y3NmU2MGYtMmVkZS00ZDhjLTg0MDYtZDQxMDRkMWJmNGI3IiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  benevidaBeneficiarios: {
    titulo: "Dashboard Benevida - Beneficiários",
    descricao: "Indicadores e acompanhamento dos beneficiários",
    grupo: "Benevida",
    icone: "Users",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/adm",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMjA4MmFiOGYtYjM4Mi00NGZiLWIxNjItZTY4Mzk4NTI3NDQ5IiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  qualidadeEstoque: {
    titulo: "Qualidade — Indicadores Estoque",
    descricao: "Indicadores de qualidade e controle de estoque",
    grupo: "Qualidade",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/assistencial",
    icone: "Boxes",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMTZkZGQ4MWItOTFmNy00OGM0LWE5ZmMtODRjZjczNjNmYmNmIiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  medclin: {
    titulo: "Dashboard Indicadores - Medclin",
    descricao: "Indicadores gerenciais da Medclin",
    grupo: "Medclin",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/age",
    icone: "Stethoscope",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYWZkN2ViNWQtMGJkNi00YjY5LWEzNDMtODUyNTg1ZGI5Y2NhIiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  faturamentoConvenio: {
    titulo: "Faturamento Convênio — Visão Geral",
    descricao: "Visão geral do faturamento de convênios",
    grupo: "Financeiro",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/financeiro",
    icone: "Receipt",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMDVjMzZmNzQtMGMyYi00OTYwLWFjODEtNTdlMDM0MTAzZGNlIiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  qualidadeExames: {
    titulo: "Qualidade — Indicadores Exames",
    descricao: "Indicadores de qualidade dos exames",
    grupo: "Qualidade",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/assistencial",
    icone: "FlaskConical",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNGRlZTZmY2QtNDQ0NS00YTM2LTg1NTUtNDUwYTE3MDMwMWM0IiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  qualidadePA: {
    titulo: "Qualidade — Indicadores PA",
    descricao: "Indicadores do Pronto Atendimento",
    grupo: "Qualidade",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/assistencial",
    icone: "HeartPulse",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZTcwYzc4OWUtNTk1Ni00N2FmLThiODQtYWY1YzMyZGIxNTkyIiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  agendaMedicaDiap: {
    titulo: "Agenda Médica DIAP",
    descricao: "Agenda e acompanhamento médico",
    grupo: "Assistencial",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/age",
    icone: "CalendarDays",
    url: "https://app.powerbi.com/view?r=eyJrIjoiOWViODZkYWMtYThjMy00NjZhLWI2NDktNzMzMDY0YzA3MThiIiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },

  glosas: {
    titulo: "Dashboard — Glosas",
    descricao: "Indicadores e acompanhamento de glosas",
    grupo: "Financeiro",
    linkVoltar: "https://tibene2022.wixsite.com/novabene/financeiro",
    icone: "FileSearch",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNjYzZmQxNGItMzBjNy00MGVhLWFiZmYtNjU0YzE2OGEzYzZkIiwidCI6IjcyYTc5ZGNjLThiMjYtNGYwNi1hNGNlLWJmOTU4NjhiN2M0MSJ9",
  },
}

export async function getReports(): Promise<Record<string, Report>> {
  await new Promise((resolve) => setTimeout(resolve, 900))

  return REPORTS
}