package com.example.reto5mt.Service;

import com.example.reto5mt.Modelo.Category;
import com.example.reto5mt.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CategoryService {
    @Autowired
    private CategoryRepository metodosCrud;

    public List<Category> getAll() {
        return metodosCrud.getAll();
    }

    public Optional<Category> getCategory(int CategoryId) {
        return metodosCrud.getCategory(CategoryId);
    }

    public Category save(Category category) {
        if (category.getId()== null) {
            return metodosCrud.save(category);
        } else {
            Optional<Category> category1 = metodosCrud.getCategory(category.getId());
            if (category1.isEmpty()) {
                return metodosCrud.save(category);
            } else {
                return category;
            }
        }
    }

    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category>g=metodosCrud.getCategory(category.getId());
            if(!g.isEmpty()){
                if(category.getDescription()!=null){
                    g.get().setDescription(category.getDescription());
                }
                if(category.getName()!=null){
                    g.get().setName(category.getName());
                }
                return metodosCrud.save(g.get());
            }
        }
        return category;
    }
    public boolean deletecategoria(int categoriaId){
        Boolean d=getCategory(categoriaId).map(categoria -> {
            metodosCrud.delete(categoria);
            return true;
        }).orElse(false);
        return d;
    }

}