import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

export class SignupDto {
  @IsEmail()
  @MinLength(8)
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
    message:
      'Password must include at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long',
  })
  password: string;

  @IsString()
  @MinLength(2)
  fullname: string;

  @IsString()
  referenceId: string;
}
