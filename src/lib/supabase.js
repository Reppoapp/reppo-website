import { createClient } from '@supabase/supabase-js'

// Hardcoded values as fallback until .env is working
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qjprlzynbzcuzpimkcny.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcHJsenluYnpjdXpwaW1rY255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MzY0NzUsImV4cCI6MjA2NDMxMjQ3NX0.R1q-UBRV1EJw17v5PCT-MJ0jl4m1GRXHILjDDOoxfsk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Waitlist functions
export const addToWaitlist = async (email) => {
  try {
    console.log('Attempting to add email to waitlist:', email)
    console.log('Supabase URL:', supabaseUrl)
    console.log('Supabase Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...')
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }
    
    console.log('Successfully added to waitlist:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return { success: false, error: error.message }
  }
}

export const isEmailInWaitlist = async (email) => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return !!data
  } catch (error) {
    console.error('Error checking waitlist:', error)
    return false
  }
} 