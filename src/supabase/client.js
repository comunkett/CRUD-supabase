/* eslint-disable no-undef */
// import'dotenv/config';
import {createClient} from '@supabase/supabase-js';
// import envs from '../../config/config.env'
// import process from 'dotenv';
console.log(import.meta.env.VITE_SUPURL)
export const supabase = createClient(
    import.meta.env.VITE_SUPURL, 
    import.meta.env.VITE_ANON_KEY)
