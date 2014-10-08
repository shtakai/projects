class User < ActiveRecord::Base
	has_attached_file :avatar

	# attr_accessible :avatar, :first_name, :last_name, :email
	validates_attachment_content_type :avatar, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
