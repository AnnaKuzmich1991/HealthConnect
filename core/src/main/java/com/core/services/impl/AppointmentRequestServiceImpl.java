package com.core.services.impl;

import com.core.convertors.AppointmentRequestToAppointmentRequestDtoConvertor;
import com.core.dto.AppointmentRequestDTO;
import com.core.models.AppointmentRequest;
import com.core.models.Doctor;
import com.core.repositories.AppointmentRequestRepository;
import com.core.repositories.DoctorRepository;
import com.core.services.AppointmentRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentRequestServiceImpl implements AppointmentRequestService {
    private final AppointmentRequestRepository appointmentRequestRepository;
    private final DoctorRepository doctorRepository;
    private final AppointmentRequestToAppointmentRequestDtoConvertor appointmentRequestToAppointmentRequestDtoConvertor;

    @Override
    public void createAppointmentRequest(AppointmentRequestDTO appointmentRequestDTO) {
        AppointmentRequest appointmentRequest=new AppointmentRequest();
        appointmentRequest.setPhone(appointmentRequestDTO.getPhone());
        appointmentRequest.setRequestTime(LocalDateTime.now());
        appointmentRequest.setMessage(appointmentRequestDTO.getMessage());
        appointmentRequest.setFullName(appointmentRequestDTO.getFullName());
        Doctor doctor = doctorRepository.findById(appointmentRequestDTO.getDoctorId()).orElse(null);
        appointmentRequest.setDoctor(doctor);
        appointmentRequestRepository.save(appointmentRequest);

    }

    @Override
    public List<AppointmentRequestDTO> getAll() {
        return appointmentRequestRepository.findAll()
                .stream()
                .map(appointmentRequestToAppointmentRequestDtoConvertor::convert)
                .toList();
    }
}