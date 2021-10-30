package com.example.reto5mt.Modelo;

/**
 * @Author Libardo Salamanca Jimenez
 * @Date 19/10/2021
 */
/**
 * Imports Necesarios para el funcionamiento del modulo
 */
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*; //requerid
import java.io.Serializable;
import java.util.List;


/**
 * Definicion del Modulo o la Entidad
 */
@Entity
/**
 * Definicion de la tabla
 */
@Table(name = "audience")

/**
 * Definicion de la Funcions Audiencia
 */
public class Audience implements Serializable {
    /**
     * Atibutos de la funcion
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    /**
     * Contiene el id del auditorio
     */
    private Integer id;
    /**
     * Contiene el nombre del auditorio
     */
    private String name;
    /**
     * Contiene la categoria del auditorio
     */
    private String owner;
    /**
     * Contiene la capacidad del auditorio
     */
    private Integer capacity;
    /**
     * Contiene la descripcion del auditorio
     */
    private String description;

    /**
     * Definicion de Integracion de Muchos a Uno entre Audience y category
     */
    @ManyToOne
    @JoinColumn(name = "categoryId")
    @JsonIgnoreProperties("audiences")
    private Category category;

    /**
     * Definicion de Integracion de Uno a Muchos entre Audience y category
     */
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "audience")
    @JsonIgnoreProperties({"audience", "client"})
    private List<Message> messages;

    /**
     * Definicion de Integracion de Uno a Muchos entre Audience y Reservations
     */
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "audience")
    @JsonIgnoreProperties({"audience", "client"})
    private List<Reservation> reservations;

    /**
     * Extraccion del ID
     * @return ID
     */
    public Integer getId() {
        return id;
    }

    /**
     * Modificacion del id
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Extraccion del Name
     * @return Name
     */
    public String getName() {
        return name;
    }

    /**
     * Modificacion del Name
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Extraccion del Owner
     * @return Owner
     */
    public String getOwner() {
        return owner;
    }

    /**
     * Modificacion del Owner
     * @param owner
     */
    public void setOwner(String owner) {
        this.owner = owner;
    }
    /**
     * Extraccion del capacity
     * @return Capacity
     */
    public Integer getCapacity() {
        return capacity;
    }

    /**
     * Modificacion del capacity
     * @param capacity
     */
    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }
    /**
     * Extraccion del Description
     * @return Description
     */
    public String getDescription() {
        return description;
    }
    /**
     * Modificacion del Description
     * @param description
     */
    public void setDescription(String description) {
        this.description = description;
    }
    /**
     * Extraccion del Category
     * @return category
     */
    public Category getCategory() {
        return category;
    }
    /**
     * Modificacion del Category
     * @param category
     */
    public void setCategory(Category category) {
        this.category = category;
    }
    /**
     * Extraccion del Messages
     * @return Messages
     */
    public List<Message> getMessages() {
        return messages;
    }
    /**
     * Modificacion del Messages
     * @param messages
     */
    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }
    /**
     * Extraccion del Reservations
     * @return Reservations
     */
    public List<Reservation> getReservations() {
        return reservations;
    }
    /**
     * Modificacion del Reservations
     * @param reservations
     */
    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
