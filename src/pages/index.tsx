import { useEffect, useState } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { useSupabase } from '../hooks/useSupabase'


export default function Home() {
  const { user } = useUser()

  console.log({ user })



  const [tasks, setTasks] = useState<{id: number, name: string, user_id: string}[]>([])
  const { supabase } = useSupabase()


  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')




  useEffect(() => {
    if (!user) return


    async function loadTasks() {
      setLoading(true)

      const { data, error } = await supabase.from('tasks').select()

      console.log(data)
      if (!error) setTasks(data)
      setLoading(false)
    }

    loadTasks()
  }, [user, supabase])

  console.log({ supabase })

  async function createTask() {
    if (!supabase) return;

    const { error } = await supabase.from('tasks').insert([
      { name: name, user_id: user?.id }
    ]);

    if (error) {
      console.error('Erro ao criar tarefa:', error);
    } else {
      console.log('Tarefa criada com sucesso');
      loadTasks();
    }
  }

  return (
    <div>
      <h1>Tasks</h1>

      {loading && <p>Loading...</p>}

      {!loading && tasks.length > 0 && tasks.map((task: any) => <p key={task.id}>{task.name}</p>)}

      {!loading && tasks.length === 0 && <p>No tasks found</p>}


      <UserButton  />


        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => createTask()}>Add</button>

    </div>
  )
}