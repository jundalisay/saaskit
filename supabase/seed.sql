INSERT INTO "users" (email, password) VALUES ("snow@acme.org", "123123")


-- Step 1: Insert users (password hashing needs to be handled)
-- Note: This assumes you have a separate table for profiles and that you can manage passwords
-- In a typical setup, you would use the Supabase API to create users securely.

-- Insert users
-- INSERT INTO users (id, email, password, created_at)
-- VALUES
--   (uuid_generate_v4(), 'alice@example.com', uuid_generate_v4(), NOW()),
--   (uuid_generate_v4(), 'bob@example.com', uuid_generate_v4(), NOW()),
--   (uuid_generate_v4(), 'charlie@example.com', uuid_generate_v4(), NOW());


-- Step 3: Insert posts linked to the users
-- INSERT INTO posts (id, user_id, content, created_at)
-- VALUES
--   (uuid_generate_v4(), (SELECT id FROM users WHERE email = 'alice@example.com'), 'Hello, world! This is Alice.', NOW()),
--   (uuid_generate_v4(), (SELECT id FROM users WHERE email = 'bob@example.com'), 'Bob here! Excited to join this platform.', NOW()),
--   (uuid_generate_v4(), (SELECT id FROM users WHERE email = 'charlie@example.com'), 'Charlie has arrived! Let\'s connect!', NOW()),
--   (uuid_generate_v4(), (SELECT id FROM users WHERE email = 'alice@example.com'), 'Another post from Alice!', NOW());