using System;
using System.Collections.Generic;
using System.Linq;
using _2.Dominio.Models;
using Microsoft.AspNetCore.Mvc;

namespace _1.Apresentacao.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {


        //MOCK INICIAL (FORMA BACANA DE MOCKAR OS DADOS INICIALMENTE)
        private IEnumerable<Evento> listaEventos = new Evento[] {
                
                new Evento(){
                    EventoId = 1,
                    Local = "São Paulo, Osasco",
                    Tema = "Empoderamento de mulheres !!",
                    Lote = "1",
                    QtdPessoas = 250,
                    DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                    ImagemURL = "foto.png"
                },
                 new Evento(){
                    EventoId = 2,
                    Local = "Bahia, Salvador",
                    Tema = "Empoderamento de mulheres !!",
                    Lote = "5",
                    QtdPessoas = 310,
                    DataEvento = DateTime.Now.AddDays(10).ToString("dd/MM/yyyy"),
                    ImagemURL = "foto.png"
                 }

                };



        public EventoController()
        {
            
        }



        [HttpGet]
        public IEnumerable<Evento> Busca(){;

            return listaEventos;
        }
        

        [HttpGet("{id}")]
        public IEnumerable<Evento> BuscaId(int id){

            //O where é aplicado em uma lista de items, onde consigo fazer uma especie de filtro/querie
            //antes do recurso de fato

            //eventox representa o objeto da lista que vai vir como resultado do where na lista 
            //"listaEventos" (nome que coloquei para didatica)

            //Dessa forma consigo simular a busca comqualquer id da lista
            return listaEventos.Where(eventox => eventox.EventoId == id);
        }
        


        [HttpPost]
        public ActionResult Cadastra([FromBodyAttribute] Evento request){

            Evento evento = new Evento(){

                EventoId = request.EventoId,
                Local = request.Local,
                Tema = request.Tema,
                Lote = request.Lote,
                QtdPessoas = request.QtdPessoas,
                DataEvento = DateTime.Now.AddDays(10).ToString("dd/MM/yyyy"),
                //DataEvento = request.DataEvento,
                ImagemURL = request.ImagemURL
            };

            listaEventos.ToList().Add(evento);

            return NoContent();

        }
    

        [HttpPut("{id}")]
        public string Atualiza(int id){

            return $"Atualizando registro com id {id}";

        }


        [HttpDelete("{id}")]
        public string Deleta(int id){

            return $"Deletando registro com id {id}";

        }



        
    }


}