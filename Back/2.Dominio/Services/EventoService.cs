using System.Collections.Generic;
using _2.Dominio.Interface;
using _2.Dominio.Models;
using _2.Dominio.Services.Interface;

namespace _2.Dominio.Services
{
    public class EventoService : IEventoService
    {

        private readonly IEventoRepository _repo;

        public EventoService(IEventoRepository repo)
        {
            _repo = repo;
        }


        public void cadastrar(Evento evento){

            _repo.cadastrar(evento);

        }

        public List<Evento> buscaEventos(){

            return _repo.buscaEventos();

        }
        
        
        
  }
}