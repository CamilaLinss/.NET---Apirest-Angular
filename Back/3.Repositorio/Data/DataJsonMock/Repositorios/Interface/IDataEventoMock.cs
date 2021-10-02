using System.Collections.Generic;
using _2.Dominio.Models;

namespace _3.Repositorio.Data.DataJsonMock.Repositorios.Interface
{
    public interface IDataEventoMock
    {
        void PostEventoMock(Evento evento);
        void PutEventoAtualizaMock(int id, Evento eventoAtualizado);
        List<Evento> GetEventos();
        Evento GetEvento(int id);
        Evento DeleteEvento(int id);
         
    }
}