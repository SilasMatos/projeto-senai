import axiosInstance from '../services/axios-instance'
import {
  Notification,
  CalendarEvent,
  Aluno,
  Endereco,
  Professor,
  UnidadeCurricular,
  Projeto,
  Disciplina,
  DisciplinaProjeto,
  ProjetoAluno,
  ProjetoProfessor,
  EtapaProjeto,
  AnexoEtapa
} from '../types/types-queries'

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessTokenIntegrado')
  return {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6InNpbGFzbWF0b3N5bUBnbWFpbC5jb20iLCJleHAiOjE3NDk4MzQxMTl9.2LvZ8IbE3kUmbTXLmN0O8HEbIOETpwmGDit7UzReM8M`
  }
}

export async function getDashboard() {
  const token = localStorage.getItem('accessTokenIntegrado')
  const response = await axiosInstance.get('/dashboard', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export async function getNotifications(params?: {
  startDate?: string
  endDate?: string
}) {
  const token = localStorage.getItem('accessTokenIntegrado')

  // Em um ambiente real, enviaríamos os parâmetros de filtro
  // Aqui, estamos simulando dados
  const mockNotifications: Notification[] = [
    {
      id: '1',
      project: {
        id: '1',
        name: 'Projeto A',
        description:
          'Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Quem manda na minha terra sou euzis!',
        status: 'Em andamento',
        date: '00/00/0000 | 00h00',
        creator: 'Erik Marques',
        creatorRole: 'Docente'
      },
      createdAt: new Date().toISOString(),
      read: false
    },
    {
      id: '2',
      project: {
        id: '2',
        name: 'Projeto B',
        description:
          'Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Quem manda na minha terra sou euzis!',
        status: 'Em andamento',
        date: '00/00/0000 | 00h00',
        creator: 'Erik Marques',
        creatorRole: 'Docente'
      },
      createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 dia atrás
      read: true
    },
    {
      id: '3',
      project: {
        id: '3',
        name: 'Projeto C',
        description:
          'Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Quem manda na minha terra sou euzis!',
        status: 'Em andamento',
        date: '00/00/0000 | 00h00',
        creator: 'Erik Marques',
        creatorRole: 'Docente'
      },
      createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 dias atrás
      read: false
    }
  ]

  return { data: mockNotifications }
}

export async function getCalendarEvents(params?: {
  month?: number
  year?: number
  type?: string
}) {
  const token = localStorage.getItem('accessTokenIntegrado')

  // Mock data para eventos do calendário
  const mockEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Palestra: O Futuro do JAVA',
      description:
        'Entenda o futuro do JAVA e como poder iniciar nessa linguagem. Uma discussão aprofundada sobre as novas features e o mercado de trabalho.',
      type: 'palestra',
      date: '2025-06-03', // Próximo evento
      time: '19:00',
      location: 'Auditório Principal - SENAI FSA',
      instructor: 'Prof. Dr. Carlos Magno',
      duration: '2h',
      status: 'agendado',
      isRegistered: false,
      maxParticipants: 100,
      currentParticipants: 45
    },
    {
      id: '2',
      title: 'Workshop de React Avançado',
      description:
        'Workshop prático sobre desenvolvimento com React, explorando hooks avançados, gerenciamento de estado com Redux/Zustand e otimizações de performance.',
      type: 'workshop',
      date: '2025-06-05', // Próximo evento
      time: '14:00',
      location: 'Laboratório de Informática 3',
      instructor: 'Profa. Dra. Beatriz Costa',
      duration: '4h',
      status: 'agendado',
      isRegistered: true,
      maxParticipants: 25,
      currentParticipants: 20
    },
    {
      id: '3',
      title: 'Feira de Projetos Inovadores',
      description:
        'Apresentação dos projetos desenvolvidos pelos alunos dos cursos técnicos. Venha conhecer as soluções criativas e inovadoras!',
      type: 'feira',
      date: '2025-06-10', // Evento futuro
      time: '09:00',
      location: 'Pátio Central - SENAI FSA',
      duration: '8h',
      status: 'agendado',
      maxParticipants: 300,
      currentParticipants: 0 // Evento de exibição
    },
    {
      id: '4',
      title: 'Aula Magna: Inteligência Artificial',
      description:
        'Uma introdução ao mundo da Inteligência Artificial, seus conceitos fundamentais, aplicações e o futuro da área.',
      type: 'aula',
      date: '2025-06-18', // Evento futuro
      time: '10:00',
      location: 'Auditório Secundário',
      instructor: 'Prof. Ricardo Almeida',
      status: 'agendado',
      isRegistered: false
    },
    {
      id: '5',
      title: 'Prova de Lógica de Programação',
      description:
        'Avaliação dos conhecimentos em lógica de programação para alunos do 1º módulo.',
      type: 'prova',
      date: '2025-06-02', // Próximo evento
      time: '08:00',
      location: 'Sala 101',
      duration: '3h',
      status: 'agendado'
    },
    {
      id: '6',
      title: 'Entrega do Projeto Web Design',
      description:
        'Prazo final para entrega e apresentação dos projetos da disciplina de Web Design Responsivo.',
      type: 'projeto',
      date: '2025-06-25', // Evento futuro
      time: '23:59',
      location: 'Plataforma Online',
      status: 'agendado'
    },
    {
      id: '7',
      title: 'Palestra: Segurança da Informação',
      description:
        'Discussão sobre os principais desafios e boas práticas em Segurança da Informação no cenário atual.',
      type: 'palestra',
      date: '2025-07-02', // Evento futuro
      time: '19:30',
      location: 'Auditório Principal - SENAI FSA',
      instructor: 'Especialista Convidado',
      duration: '1h30min',
      status: 'agendado',
      isRegistered: false,
      maxParticipants: 80,
      currentParticipants: 15
    }
  ]

  return { data: mockEvents }
}

export async function getCommunityData() {
  const token = localStorage.getItem('accessTokenIntegrado')

  // Simulação de dados da comunidade
  const mockCommunityData = {
    featuredProjects: [
      {
        id: '1',
        title: 'Sistema de Gestão Escolar',
        description:
          'Um sistema completo para gerenciar escolas, alunos e professores.'
      },
      {
        id: '2',
        title: 'Plataforma de E-learning',
        description:
          'Uma plataforma para cursos online com suporte a vídeo e quizzes.'
      }
    ],
    recentDiscussions: [
      {
        id: '1',
        title: 'Como melhorar o ensino técnico?',
        content:
          'Discussão sobre estratégias para aprimorar o ensino técnico no Brasil.'
      },
      {
        id: '2',
        title: 'Projetos open-source para iniciantes',
        content:
          'Compartilhe projetos open-source que são bons para iniciantes.'
      }
    ],
    activeMembers: [
      { id: '1', name: 'João Silva', role: 'Estudante' },
      { id: '2', name: 'Maria Oliveira', role: 'Mentora' }
    ]
  }

  return mockCommunityData
}

// Novas queries baseadas na API SENAI

// Alunos
export async function getAlunos() {
  const response = await axiosInstance.get('/api/v1/senai/alunos/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Endereços
export async function getEnderecos() {
  const response = await axiosInstance.get('/api/v1/senai/endereco/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Professores
export async function getProfessores() {
  const response = await axiosInstance.get('/api/v1/senai/professor/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Unidades Curriculares
export async function getUnidadesCurriculares() {
  const response = await axiosInstance.get(
    '/api/v1/senai/unidadeCurricular/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projetos
export async function getProjetos() {
  // Mock data para projetos
  const mockProjetos = [
    {
      uuid: '9cfdf9cc-a657-4800-9acd-104e04f0da9b',
      titulo: 'Sistema de Gestão Escolar com IA',
      descricao:
        'Projeto interdisciplinar desenvolvido para automatizar tarefas administrativas em escolas usando inteligência artificial.',
      curso: 'Engenharia de Software',
      turma: '5º Semestre -A',
      labMaker: true,
      participouSaga: false,
      itinerario: true,
      unidadeCurricular: {
        uuid: '29b54d18-f4bb-4482-8230-d49448554d9e',
        nome: 'Desenvolvimento Web com Java',
        descricao:
          'Unidade curricular voltada para o desenvolvimento de aplicações web utilizando Java, Spring Boot, padrões RESTful e melhores práticas de arquitetura.',
        cargaHoraria: '60h',
        criadoEm: '2025-06-03T00:10:41.278259',
        atualizadoEm: '2025-06-03T00:10:41.278259'
      },
      liderProjeto: {
        uuid: '612a782a-5366-49b4-8b3a-36d1e7d9ac78',
        usuarios: {
          uuid: '1613ea3b-3210-4001-90a4-d2bb4cbb9382',
          usuario: 'Ana',
          senha: '$2a$10$eVtRFm6smfu27sftls3k3OX/tL8V4YTwnpeMvdIJx.CPIwjeSOhDi',
          email: 'ana.c.nascimento8@ba.estudante.senai.br',
          tipo: 'VISITANTE',
          status: 'ATIVO',
          criadoEm: '2025-06-02T23:37:36.121558',
          atualizadoEm: '2025-06-02T23:37:36.121558'
        },
        matricula: '20250001',
        curso: 'Engenharia de Software',
        telefonePessoal: '(11) 91234-5678',
        telefoneProfissional: '(11) 3344-5566',
        linkedin: 'https://www.linkedin.com/in/joaodasilva',
        endereco: {
          uuid: '11a13511-e4c5-4fdd-be9b-348cf5b95782',
          cep: '01001-000',
          logradouro: 'Rua das Flores',
          numero: 123,
          complemento: 'Apto 45',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          pais: 'Brasil'
        },
        status: 'ATIVO',
        criadoEm: '2025-06-02T23:51:04.740426',
        atualizadoEm: '2025-06-02T23:51:04.740426'
      },
      bannerUrl: 'https://example.com/banners/projeto-gestao-escolar.png',
      codigo: 'PROJ-24B8F1',
      visibilidadeCodigo: 'PUBLICO',
      visibilidadeAnexos: 'PRIVADO',
      status: 'ATIVO',
      criadoEm: '2025-06-03T00:19:31.110399',
      atualizadoEm: '2025-06-03T00:19:31.110399'
    }
  ]

  return mockProjetos
}

// Disciplinas
export async function getDisciplinas() {
  const response = await axiosInstance.get('/api/v1/senai/disciplina/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Disciplina Projetos
export async function getDisciplinaProjetos() {
  const response = await axiosInstance.get(
    '/api/v1/senai/disciplinaProjeto/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Alunos
export async function getProjetoAlunos() {
  const response = await axiosInstance.get(
    '/api/v1/senai/projetoAluno/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Professores
export async function getProjetoProfessores() {
  const response = await axiosInstance.get(
    '/api/v1/senai/projetoProfessor/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Etapas Projetos
export async function getEtapasProjetos() {
  const response = await axiosInstance.get(
    '/api/v1/senai/etapasProjeto/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Anexos Etapas
export async function getAnexosEtapas() {
  const response = await axiosInstance.get('/api/v1/senai/AnexoEtapa/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}
