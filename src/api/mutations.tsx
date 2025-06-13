import axiosInstance from '../services/axios-instance'
import type {
  LoginMutation,
  RegisterMutation,
  CreateAlunoMutation,
  CreateEnderecoMutation,
  CreateProfessorMutation,
  CreateUnidadeCurricularMutation,
  CreateProjetoMutation,
  CreateDisciplinaMutation,
  CreateDisciplinaProjetoMutation,
  CreateProjetoAlunoMutation,
  CreateProjetoProfessorMutation,
  CreateEtapaProjetoMutation,
  CreateAnexoEtapaMutation
} from '../types/types-mutations'

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessTokenIntegrado')
  return {
    Authorization: `Bearer ${token}`
  }
}

export async function Login(payload: LoginMutation) {
  const response = await axiosInstance.post('/login', payload, {})
  return response.data
}

export async function GoogleLogin(credential: string) {
  // Mock de dados para desenvolvimento
  const mockResponse = {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6InNpbGFzbWF0b3N5bUBnbWFpbC5jb20iLCJleHAiOjE3NDk2ODU5MzJ9.Se0Vq4lp092hc3IynVt6ddYh3l5YajHqyFXb_f-bw38',
    refreshToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6InNpbGFzbWF0b3N5bUBnbWFpbC5jb20iLCJleHAiOjE3NTA5NzgzMzJ9.23T7lHnlA0YwH6VoFAh19PZEO2X0h0yitcFjfSTKTbY',
    usuariosEntity: {
      uuid: 'e6f3f7f5-4c1e-4b22-b217-1fbc3fb08379',
      nome: 'Silas',
      email: 'silasmatosym@gmail.com',
      tipo: 'VISITANTE',
      telefonePessoal: null,
      telefoneProfissional: null,
      linkedin: null,
      endereco: null,
      status: 'ATIVO',
      criadoEm: '2025-06-08T13:24:22.885126',
      atualizadoEm: '2025-06-08T13:24:22.885126',
      matricula: null,
      curso: null,
      especialidade: null,
      departamento: null
    }
  }

  // Simular delay de requisição
  await new Promise(resolve => setTimeout(resolve, 1000))

  return mockResponse

  // Código real comentado para desenvolvimento
  /*
  const response = await axiosInstance.post('/auth/google', {
    credential: credential,
    client_id: '566612538072-lt6fo1kk28mnmrsfbhqtlvc4kpqv97vh.apps.googleusercontent.com'
  })
  return response.data
  */
}

// export async function GoogleLogin(credential: string) {
//   const response = await axiosInstance.post('/auth/google', {
//     credential: credential,
//     client_id:
//       '566612538072-lt6fo1kk28mnmrsfbhqtlvc4kpqv97vh.apps.googleusercontent.com'
//   })
//   return response.data
// }

export async function Register(payload: RegisterMutation) {
  const response = await axiosInstance.post('/register', payload, {})
  return response.data
}

export async function createAluno(payload: CreateAlunoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/alunos/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

export async function createEndereco(payload: CreateEnderecoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/endereco/create',
    payload
  )
  return response.data
}

// Professor
export async function createProfessor(payload: CreateProfessorMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/professor/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Unidade Curricular
export async function createUnidadeCurricular(
  payload: CreateUnidadeCurricularMutation
) {
  const response = await axiosInstance.post(
    '/api/v1/senai/unidadeCurricular/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto
export async function createProjeto(payload: CreateProjetoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/disciplina/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Disciplina
export async function createDisciplina(payload: CreateDisciplinaMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/disciplina/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Disciplina Projeto
export async function createDisciplinaProjeto(
  payload: CreateDisciplinaProjetoMutation
) {
  const response = await axiosInstance.post(
    '/api/v1/senai/disciplinaProjeto/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Aluno
export async function createProjetoAluno(payload: CreateProjetoAlunoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/projetoAluno/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Professor
export async function createProjetoProfessor(
  payload: CreateProjetoProfessorMutation
) {
  const response = await axiosInstance.post(
    '/api/v1/senai/projetoProfessor/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Etapa Projeto
export async function createEtapaProjeto(payload: CreateEtapaProjetoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/etapasProjeto/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Anexo Etapa
export async function createAnexoEtapa(payload: CreateAnexoEtapaMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/AnexoEtapa/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}
