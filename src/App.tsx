// JSX = JS + XML
import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostProps } from './components/Post'

import './global.css';

import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/61030205?v=4',
      name: 'Laís Escorcio',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei criar um projeto Front End de feed de posts e comentários! 🚀  Deem uma olhada em como ficou!' },
      { type: 'link', content: 'https://github.com/laisescorcio/01-fundamentos-reactjs-02-ts' }
    ],
    publishedAt: new Date('2023-01-21 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/61030205?v=4',
      name: 'Laís Escorcio',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei criar um projeto Front End de feed de posts e comentários! 🚀  Deem uma olhada em como ficou!' },
      { type: 'link', content: 'https://github.com/laisescorcio/01-fundamentos-reactjs-02-ts' }
    ],
    publishedAt: new Date('2023-01-21 20:00:00')
  },
] as PostProps[] // Typescript: export da tipagem do componente Post

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
