package com.example.reto5mt.Repository;

import com.example.reto5mt.Interface.CategoryInterface;
import com.example.reto5mt.Modelo.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public class CategoryRepository {
    @Autowired
    private CategoryInterface crud;
    public List<Category> getAll(){
        return (List<Category>) crud.findAll();
    }
    public Optional<Category> getCategory(int id){
        return crud.findById(id);
    }

    public Category save(Category category){
        return crud.save(category);
    }
    public void delete(Category category){
        crud.delete(category);
    }
}
