using System.Collections.Generic;
using _2.Dominio.Interface;
using _2.Dominio.Models;
using _3.Repositorio.Data.DataJsonMock.Repositorios;
using _3.Repositorio.Data.DataJsonMock.Repositorios.Interface;

namespace _3.Repositorio
{
    public class EventoRepository : IEventoRepository
    {

        private readonly IDataEventoMock _data;

        public EventoRepository(IDataEventoMock data)
        {
            _data = data;
        }


        public void cadastrar(Evento cliente){

            _data.PostEventoMock(cliente);

        }

        public List<Evento> buscaEventos(){

           List<Evento> eventos =  _data.GetEventos();

            return eventos;

        }





        
    }
}