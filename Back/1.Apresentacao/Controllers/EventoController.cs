using System;
using System.Collections.Generic;
using System.Linq;
using _2.Dominio.Models;
using _3.Repositorio.Data;
using Microsoft.AspNetCore.Mvc;

namespace _1.Apresentacao.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {


        private readonly DataContext _data;


        public EventoController(DataContext data)
        {
            _data = data;
        }



        [HttpGet]
        public IEnumerable<Evento> Busca(){;

            return _data.Eventos;
        }
        

        [HttpGet("{id}")]
        public IEnumerable<Evento> BuscaId(int id){

            //O where é aplicado em uma lista de items, onde consigo fazer uma especie de filtro/querie
            //antes do recurso de fato

            //eventox representa o objeto da lista que vai vir como resultado do where na lista 
            //"listaEventos" (nome que coloquei para didatica)

            //Dessa forma consigo simular a busca comqualquer id da lista
            return _data.Eventos.Where(eventox => eventox.EventoId == id);
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

            _data.Eventos.ToList().Add(evento);

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