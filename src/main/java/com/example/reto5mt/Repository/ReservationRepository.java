package com.example.reto5mt.Repository;

import com.example.reto5mt.Interface.ReservationInterface;
import com.example.reto5mt.Modelo.Client;
import com.example.reto5mt.Modelo.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Repository
public class ReservationRepository {
    @Autowired
    private ReservationInterface crud4;

    public List<Reservation> getAll(){
        return (List<Reservation>) crud4.findAll();
    }
    public Optional<Reservation> getReservation(int id){
        return crud4.findById(id);
    }
    public Reservation save(Reservation reservation){
        return crud4.save(reservation);
    }
    public void delete(Reservation reservation){
        crud4.delete(reservation);
    }


//    Informes

    public List<Reservation> ReservacionStatusRepositorio (String status){
        return crud4.findAllByStatus(status);
    }

    public List<Reservation> ReservacionTiempoRepositorio (Date a, Date b){
        return crud4.findAllByStartDateAfterAndStartDateBefore(a, b);

    }

    public List<CountClient> getClientesRepositorio(){
        List<CountClient> res = new ArrayList<>();
        List<Object[]> report = crud4.countTotalReservationsByClient();
        for(int i=0; i<report.size(); i++){
            res.add(new CountClient((Long)report.get(i)[1],(Client) report.get(i)[0]));
        }
        return res;
    }

}
