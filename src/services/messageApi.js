import supabase from './supabase';

export async function sendMessage(message) {
  const { data, error } = await supabase
    .from('contact')
    .insert([message])
    .select();

  if (error) throw new Error('Failed to send message');
  console.log(data);
}
