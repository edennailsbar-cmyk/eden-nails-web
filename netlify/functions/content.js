const { getStore } = require('@netlify/blobs');
const DEFAULT = require('../../content/default.json');

function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };
}
function ok(body, status=200){return {statusCode:status,headers:{...cors(),'Content-Type':'application/json'},body:JSON.stringify(body)}}
function authorized(event){
  const pass = process.env.ADMIN_PASSWORD;
  const sent = event.headers['x-admin-password'] || event.headers['X-Admin-Password'];
  if(!pass) return false;
  return sent === pass;
}
exports.handler = async (event) => {
  if(event.httpMethod === 'OPTIONS') return {statusCode:204,headers:cors(),body:''};
  const store = getStore('eden-nails');
  if(event.httpMethod === 'GET'){
    const saved = await store.get('site-content', { type: 'json' });
    return ok(saved || DEFAULT);
  }
  if(event.httpMethod === 'POST'){
    if(!authorized(event)) return ok({error:'Contraseña incorrecta o no configurada'}, 401);
    let data; try{ data = JSON.parse(event.body || '{}'); }catch(e){ return ok({error:'JSON inválido'},400); }
    await store.setJSON('site-content', data);
    return ok({success:true});
  }
  return ok({error:'Método no permitido'},405);
};
