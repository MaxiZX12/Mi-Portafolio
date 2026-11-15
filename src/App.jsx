import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("perfil");

  const menuItems = [
    {id: "perfil", label: "01. STATUS (SOBRE MÍ)"},
    {id: "misiones", label: "02. MISSIONS (PROYECTOS)"},
    {id: "habilidades", label: "03. SKILLS (HABILIDADES)"},
    {id: "contacto", label: "04. CALL ME (CONTACTO)"},
  ];
  const misProyectos = [
    {
      id: 1,
      titulo: "OPERACIÓN: PORTAFOLIO WEB",
      descripcion: "Sitio web interactivo con React y Tailwind CSS inspirado en la interfaz de usuario de Persona 5.",
      tecnologias: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/MaxiZX12",
      estado: "FINALIZADO",
    },
    {
      id: 2,
      titulo: "MISIÓN SECUNDARIA: PROYECTO 2",
      descripcion: "PROXIMAMENTE: SOLO EN CINES XD",
      tecnologias: ["SEPA LA BOLAS :3"],
      githubUrl: "https://github.com/MaxiZX12",
      estado: "PRÓXIMAMENTE",
    },
  ];
  
  const misHabilidades = [
    { nombre: "REACT", tipo: "FRAMEWORK", nivel: "APRENDIENDO" },
    { nombre: "C#", tipo: "LENGUAJE", nivel: "BASICO" },
    { nombre: "C++", tipo: "LENGUAJE", nivel: "INTERMEDIO" },
    { nombre: "POSGRESTSQL", tipo: "BASE DE DATOS", nivel: "BASICO" },
    { nombre: "JAVASCRIPT", tipo: "LENGUAJE", nivel: "INTERMEDIO" },
    { nombre: "TAILWIND CSS", tipo: "DISEÑO", nivel: "APRENDIENDO" },
    { nombre: "HTML5 & CSS3", tipo: "FUNDAMENTOS", nivel: "INTERMEDIO" },
    { nombre: "GIT & GITHUB", tipo: "HERRAMIENTA", nivel: "EN PRÁCTICA" },
    { nombre: "VITE", tipo: "ENTORNO", nivel: "APRENDIENDO" },
  ];


    return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center p-6 text-white selection:bg-[#e60012] selection:text-white">
      
      
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat filter blur-[2px] opacity-35 scale-105 pointer-events-none"
        style={{ backgroundImage: "url('/bg-p5.jpg')" }}
      />


      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none" />
      <div className="relative mb-8 transform -rotate-3">
        <span className="absolute -top-6 -left-4 bg-[#ffe600] text-black font-black px-3 py-1 text-sm uppercase transform -skew-x-12 tracking-widest">
          SYSTEM ONLINE
        </span>
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase bg-[#e60012] text-white px-8 py-3 border-4 border-white shadow-[10px_10px_0px_#000]">
          TAKE YOUR HEART
        </h1>
      </div>

      
      <div className="flex flex-col gap-4 my-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              px-8 py-3 text-xl font-black uppercase tracking-wider cursor-pointer
              border-4 transition-all duration-150 transform -skew-x-12
              ${activeTab === item.id
                ? "bg-black text-white border-white shadow-[6px_6px_0px_#e60012] translate-x-3"
                : "bg-white text-black border-black shadow-[4px_4px_0px_#000] hover:bg-[#e60012] hover:text-white hover:border-black hover:shadow-[6px_6px_0px_#fff] hover:translate-x-1"}
            `}
          >
            <span className="inline-block transform skew-x-12">
              {item.label}
            </span>
          </button>
        ))}
      </div>
              {/* CAJA DE CONTENIDO DINÁMICO ESTILO P5 */}
      <div className="w-full max-w-3xl bg-[#141414] border-4 border-white p-6 md:p-8 shadow-[12px_12px_0px_#000] mt-4 relative">
        
        {/* PESTAÑA 1: STATUS (SOBRE MÍ) */}
        {activeTab === "perfil" && (
          <div className="space-y-4">
            <div className="inline-block bg-[#e60012] text-white font-black px-4 py-1 text-lg uppercase transform -skew-x-12">
              FICHA DE IDENTIDAD
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative shrink-0">
                <img 
                  src="/profile.jpg" 
                  alt="Maximiliano" 
                  className="w-24 h-24 object-cover border-4 border-white shadow-[5px_5px_0px_#e60012] transform -rotate-2"
                />
                <span className="absolute -bottom-2 -right-1 bg-[#ffe600] text-black text-[10px] font-black px-1.5 py-0.5 border border-black uppercase tracking-wider">
                  @MaxiZX12
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-black italic">MAXIMILIANO FERNANDEZ</h2>
                <p className="text-[#ffe600] font-bold text-base uppercase tracking-wider">
                  &gt;&gt; FRONTEND, BACKEND DEVELOPER & ESTUDIANTE
                </p>
              </div>
            </div>
            <div className="bg-black p-4 border-l-4 border-[#e60012] text-gray-300 text-sm leading-relaxed">
              Realmente estoy dispuesto a dar mi maximo esfuerzo en aprender y mejorar mis habilidades como programador y desarrollador web.
            </div>
            <div className="pt-2 flex items-center gap-2">
              <span className="bg-white text-black font-black px-2 py-0.5 text-xs uppercase">
                MISIÓN
              </span>
              <span className="text-gray-400 text-sm">Aprender React y crear interfaces muy exoticas como puedes ver.</span>
            </div>
          </div>
        )}

        {/* PESTAÑA 2: MISIONES (PROYECTOS) */}
        {activeTab === "misiones" && (
          <div className="space-y-4">
            <div className="inline-block bg-[#e60012] text-white font-black px-4 py-1 text-lg uppercase transform -skew-x-12">
              MISIONES ACTIVAS
            </div>
            
            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
              {misProyectos.map((proyecto) => (
                <div 
                  key={proyecto.id}
                  className="bg-black border-2 border-white p-4 shadow-[4px_4px_0px_#e60012]"
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="text-xl font-black text-white italic">{proyecto.titulo}</h4>
                    <span className="bg-[#ffe600] text-black text-xs font-black px-2 py-0.5">
                      {proyecto.estado}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech) => (
                      <span key={tech} className="bg-[#222] text-[#ffe600] text-xs font-bold px-2 py-0.5 border border-neutral-700">
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={proyecto.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-white text-black hover:bg-[#e60012] hover:text-white font-black px-3 py-1 text-xs uppercase transition-colors"
                  >
                    CÓDIGO GITHUB ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

         {/* PESTAÑA 3: HABILIDADES */}
        {activeTab === "habilidades" && (
          <div className="space-y-4">
            <div className="inline-block bg-[#e60012] text-white font-black px-4 py-1 text-lg uppercase transform -skew-x-12">
              ARSENAL DE PODERES
            </div>
            <p className="text-gray-300 text-xs italic">
              Tecnologías y herramientas equipadas para desarrollo web:
            </p>
            {/* Cuadrícula de habilidades tipo tarjeta de combate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-1">
              {misHabilidades.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-black border-2 border-white p-3 flex justify-between items-center shadow-[3px_3px_0px_#e60012] hover:border-[#ffe600] transition-colors"
                >
                  <div>
                    <span className="text-[10px] text-[#ffe600] font-black uppercase tracking-wider block">
                      {skill.tipo}
                    </span>
                    <h5 className="text-base font-black text-white italic">
                      {skill.nombre}
                    </h5>
                  </div>
                  
                  <span className="bg-[#e60012] text-white text-[11px] font-black px-2 py-0.5 transform -skew-x-6 border border-white">
                    {skill.nivel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

                {/* PESTAÑA 4: CONTACTO */}
        {activeTab === "contacto" && (
          <div className="space-y-4">
            <div className="inline-block bg-[#e60012] text-white font-black px-4 py-1 text-lg uppercase transform -skew-x-12">
              CANAL DE COMUNICACIÓN
            </div>

            <h3 className="text-xl font-black italic">¿TIENES UNA MISIÓN PARA MÍ?</h3>
            <p className="text-gray-300 text-xs">
              Escríbeme directamente o revisa mis repositorios en GitHub:
            </p>
            
            <div className="flex flex-col gap-3 pt-1">
              {/* Botón de Correo directo */}
              <a 
                href="mailto:maximus2015.9@gmail.com"
                className="bg-white text-black hover:bg-[#e60012] hover:text-white border-2 border-black p-3 font-black text-xs uppercase transition-all shadow-[4px_4px_0px_#000] flex items-center justify-between"
              >
                <span>✉ ENVIAR CORREO</span>
                <span className="text-[11px] text-gray-500 font-bold hover:text-white">maximus2015.9@gmail.com</span>
              </a>

              {/* Botón a tu GitHub */}
              <a 
                href="https://github.com/MaxiZX12" 
                target="_blank" 
                rel="noreferrer"
                className="bg-black text-white hover:bg-white hover:text-black border-2 border-white p-3 font-black text-xs uppercase transition-all shadow-[4px_4px_0px_#e60012] flex items-center justify-between"
              >
                <span>🐙 PERFIL DE GITHUB</span>
                <span className="text-[11px] text-[#ffe600] font-bold">@MaxiZX12 ↗</span>
              </a>
            </div>
          </div>
        )}

      </div>
      

    </div>
  );
}