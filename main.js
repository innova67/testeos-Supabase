
// import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://dngdzrclokvsobpfrxsa.supabase.co';
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZ2R6cmNsb2t2c29icGZyeHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5Mzg5NTUsImV4cCI6MjAwMTUxNDk1NX0.ZzPxaYrmuqknxknA63-tLLUdJzFazPUYDvm6Kv7b-mk;
const supabase = createClient(supabaseUrl, supabaseKey);

// get html div id
const visDatos = document.getElementById("clientes");


async function cargarDB() {
    // tener los datos a la mano
    const { data, error } = await supabase
        .from('clientes')
        .select('nombres')
    
    //revisar que todo esté bien
    console.log(data);
    console.log(error);
}

cargarDB();