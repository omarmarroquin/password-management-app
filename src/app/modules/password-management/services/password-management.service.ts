import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPasswordCardCreationPayload, IPasswordCardDetail } from '../entities/password-managment';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagementService {

  serviceUrl = 'https://password-management-ms.herokuapp.com/password-management/password-cards/';

  constructor(
    private http: HttpClient,
  ) { }

  fetchAllPasswords(): Observable<IPasswordCardDetail[]> {
    return this.http.get<IPasswordCardDetail[]>(this.serviceUrl);
  }

  createPasswordCard(body: IPasswordCardCreationPayload): Observable<IPasswordCardDetail> {
    return this.http.post<IPasswordCardDetail>(this.serviceUrl, body);
  }

  updatePasswordCard({ id, ...restPayload }: IPasswordCardDetail): Observable<IPasswordCardDetail> {
    return this.http.put<IPasswordCardDetail>(`${this.serviceUrl}${id}`, restPayload);
  }

  deletePasswordCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.serviceUrl}${id}`);
  }
}
