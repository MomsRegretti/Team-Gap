class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :map
              # :foreign_key => 'uuid'
end
