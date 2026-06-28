const { getStore } = require('@netlify/blobs');
function cors(){return {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type, X-Admin-Password','Access-Control-Allow-Methods':'GET, POST, OPTIONS'}}
function ok(body,status=200){return {statusCode:status,headers:{...cors(),'Content-Type':'application/json'},body:JSON.stringify(body)}}
function authorized(event){const pass=process.env.ADMIN_PASSWORD;const sent=event.headers['x-admin-password']||event.headers['X-Admin-Password'];return !!pass && sent===pass}
exports.handler=async(event)=>{
 if(event.httpMethod==='OPTIONS') return {statusCode:204,headers:cors(),body:''};
 const store=getStore('eden-nails');
 const data=(await store.get('referrals',{type:'json'})) || {created:[],used:[]};
 if(event.httpMethod==='GET'){
  if(!authorized(event)) return ok({error:'No autorizado'},401);
  return ok(data);
 }
 if(event.httpMethod==='POST'){
  let body; try{body=JSON.parse(event.body||'{}')}catch(e){return ok({error:'JSON inválido'},400)}
  const bucket=body.type==='used'?'used':'created';
  data[bucket].push({...body,created_at:new Date().toISOString()});
  await store.setJSON('referrals',data);
  return ok({success:true});
 }
 return ok({error:'Método no permitido'},405);
}
