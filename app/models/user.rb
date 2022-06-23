class User < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :maps, through: :comments

    after_initialize :init

    def init
        self.avatar  ||= "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
    end
    # Validations: username
    validates :username, presence: true
    validates :username, uniqueness: true
    # Validations: password
    validates :password, presence: true, on: :create 
    validates :password, length: { minimum: 2 }, on: :create
    # Validations: email
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted.")
        end
    end 
    
end
