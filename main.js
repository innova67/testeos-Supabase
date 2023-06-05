
// import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://dngdzrclokvsobpfrxsa.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
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