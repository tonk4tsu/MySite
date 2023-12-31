export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      News: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      Notes: {
        Row: {
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      ToDo: {
        Row: {
          completed: boolean
          Content: string | null
          created_at: string
          id: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          completed?: boolean
          Content?: string | null
          created_at?: string
          id?: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          completed?: boolean
          Content?: string | null
          created_at?: string
          id?: string
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ToDo_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
