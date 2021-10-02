using System;
using System.Collections.Generic;
using System.Linq;
using _2.Dominio.Models;
using _2.Dominio.Services.Interface;
using _3.Repositorio.Data;
using Microsoft.AspNetCore.Mvc;

namespace _1.Apresentacao.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {


        private readonly IEventoService _service;


        public EventoController(IEventoService service)
        {
            _service = service;
        }



        [HttpGet]
        public IEnumerable<Evento> Busca(){;

            return _service.buscaEventos();
        }
        

        [HttpGet("{id}")]
        public IEnumerable<Evento> BuscaId(int id){

            //O where é aplicado em uma lista de items, onde consigo fazer uma especie de filtro/querie
            //antes do recurso de fato

            //eventox representa o objeto da lista que vai vir como resultado do where na lista 
            //"listaEventos" (nome que coloquei para didatica)

            //Dessa forma consigo simular a busca comqualquer id da lista
            //return _data.Eventos.Where(eventox => eventox.EventoId == id);

            return null;
        }
        


        [HttpPost]
        public ActionResult Cadastra([FromBodyAttribute] Evento request){

            _service.cadastrar(request);

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