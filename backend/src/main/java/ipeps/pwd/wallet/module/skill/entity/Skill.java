package ipeps.pwd.wallet.module.skill.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Skill {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "skill_id", updatable = false, nullable = false)
    UUID skill_id;

    String title;
    String description;

    public Skill(String title, String description) {
        this.title = title;
        this.description = description;
    }

}
