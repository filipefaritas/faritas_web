const eur=new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR',maximumFractionDigits:0});
document.getElementById('estimateForm').addEventListener('submit',e=>{
e.preventDefault();
const b=Number(document.getElementById('budget').value||0);
const c=document.getElementById('category').value;
const p=document.getElementById('country').value;
const f={casa:[.9,1.22],empresa:[.65,1.45],carro:[.92,1.08],mudanca:[.75,1.30]}[c];
const pf=p==='AO'?1.15:p==='BR'?.88:1;
const r=document.getElementById('result');
r.innerHTML=`<strong>Estimativa preliminar</strong><p>Intervalo indicativo: <b>${eur.format(b*f[0]*pf)}</b> a <b>${eur.format(b*f[1]*pf)}</b>.</p><small>Valor meramente demonstrativo para validação do MVP.</small>`;
r.classList.remove('hidden');
});
document.getElementById('leadForm').addEventListener('submit',e=>{
e.preventDefault();
const lead={name:name.value,email:email.value,interest:interest.value,date:new Date().toISOString()};
const leads=JSON.parse(localStorage.getItem('faritas_leads')||'[]');leads.push(lead);localStorage.setItem('faritas_leads',JSON.stringify(leads));
leadMessage.textContent='Obrigado. O seu pedido ficou registado.';e.target.reset();
});