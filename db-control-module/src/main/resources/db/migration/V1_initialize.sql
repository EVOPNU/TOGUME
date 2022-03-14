DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS codes CASCADE;
DROP TABLE IF EXISTS custom_groups CASCADE;
DROP TABLE IF EXISTS in_groups CASCADE;
DROP TABLE IF EXISTS invitations CASCADE;

CREATE TABLE accounts(
                        Id serial primary key ,
                        Email varchar(150),
                        Password varchar(255),
                        FirstName varchar(255),
                        LastName varchar(255),
                        ThirdName varchar(255),
                        BirthDay datetime,
                        GroupUniversity varchar(255),
                        Faculty varchar(255),
                        NickName varchar(255),
                        StatusInProfile varchar(255),
                        CountOfFrends integer,
                        CountOfFolowers integer,
                        CountOfPhoto integer,
                        CountOfPosts integer,
                        MainPhoto varchar(255),
                        dt_create timestamp NOT NULL DEFAULT NOW()
);
CREATE TABLE codes(
                     Id serial primary key ,
                     Email varchar(150),
                     code integer,
                     dt_create timestamp NOT NULL DEFAULT NOW()

);
CREATE TABLE custom_groups(
                       id serial primary key ,
                       name varchar(45),
                       description varchar(455),
                       access varchar(45),
                       amount integer
);
CREATE TABLE in_groups(
                          group_id integer,
                          user_id integer,
                          role varchar(45),
                          CONSTRAINT FK_users_group_user_id
                              FOREIGN KEY (user_id) references accounts (id),
                          CONSTRAINT FK_users_groups_group_id
                              FOREIGN KEY (group_id) references custom_groups (id)
);
CREATE TABLE invitations(
                            group_id int not null,
                            user_id int not null,
                            primary key (group_id, user_id),
                            CONSTRAINT FK_users_group_user_id
                                FOREIGN KEY (user_id) references accounts (id),
                            CONSTRAINT FK_users_groups_group_id
                                FOREIGN KEY (group_id) references custom_groups (id)
);
CREATE TABLE news(
    id serial primary key ,
    user_id int not null,
    group_id int not null,
    title varchar(255),
    content varchar(255),
    dt_create timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT FK_news_user_id
        FOREIGN KEY (user_id) references accounts (id),
    CONSTRAINT FK_news_group_id
        FOREIGN KEY (group_id) references custom_groups (id)
);

CREATE TABLE images (
    id serial primary key ,
    image varchar(255),
    news_id int not null ,
    dt_create timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT FK_images_news_id
        FOREIGN KEY (news_id) references news(id)
);
CREATE TABLE messages (
                                message_id serial primary key,
                                chat_id bigint NOT NULL,
                                dt_create timestamp NOT NULL DEFAULT NOW(),
                                dt_update timestamp NOT NULL DEFAULT NOW(),
                                message varchar(255) NOT NULL,
                                sender_id bigint NOT NULL,
                                CONSTRAINT FK_message_user_id
                                    FOREIGN KEY (sender_id) references accounts (id)
);