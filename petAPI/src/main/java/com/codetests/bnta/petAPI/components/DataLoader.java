package com.codetests.bnta.petAPI.components;

import com.codetests.bnta.petAPI.models.Pet;
import com.codetests.bnta.petAPI.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PetRepository petRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Pet ella = new Pet("Ella", "Tortoise", "Eastern Hermanns", 7);
        petRepository.save(ella);

        Pet poppy = new Pet("Poppy", "Dog", "Springer Spaniel", 4);
        petRepository.save(poppy);

        Pet josie = new Pet("Josie", "Cat", "Tabby", 6);
        petRepository.save(josie);

        Pet fluffy = new Pet("Fluffy", "Rabbit", "Angora", 1);
        petRepository.save(fluffy);

        Pet chester = new Pet("Chester", "Dog", "Beagle", 2);
        petRepository.save(chester);

        Pet sushi = new Pet("Sushi", "Fish", "Goldfish", 1);
        petRepository.save(sushi);

        Pet lila = new Pet("Lila", "Cat", "Siamese", 6);
        petRepository.save(lila);

        Pet basil = new Pet("Basil", "Dog", "Basset Hound", 10);
        petRepository.save(basil);
    }
}
