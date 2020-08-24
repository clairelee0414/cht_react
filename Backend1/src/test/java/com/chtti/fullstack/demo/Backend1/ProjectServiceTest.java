package com.chtti.fullstack.demo.Backend1;

import com.chtti.fullstack.demo.Backend1.model.Project;
import com.chtti.fullstack.demo.Backend1.service.ProjectService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class ProjectServiceTest {
    @Autowired
    private ProjectService service;

    @BeforeEach
    public void testPreCondition(){
        assertNotNull(service);
    }
    @Test
    public void serviceTest1(){
        Project project1 = new Project("project1","Project_1");
        project1.setDescription("xxx");
        service.saveOrUpdateProject(project1);

    }
}
